import "isomorphic-fetch";
import ISong, { DifficultyType } from '../../interfaces/song';
import { AppDispatch } from '../../helpers/appDispatch';
import IUser from '../../interfaces/IUser';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { songService } from '../../services/songService'
import Button from '@material-ui/core/Button';
import ITab, { TabType, IDrumIteration, IDrumNote, DrumType } from '../../interfaces/tab';
import { stringify } from 'querystring';
import AddIcon from '@material-ui/icons/Add';
import { PlayCircleFilled, Stop, PlayArrow, HighlightOff, RemoveCircle, Remove } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';


interface Props {
    tab: ITab;
    tempo: number;
    tabUpdate: (tab) => void
}

interface State {
    tab: ITab;
    left?: number;
    top?: number;
    currentNoteValue?: number;
    currentTimeScaleValue?: number;
    currentIterIndex: number;
    isStopRequested: boolean;
}


export default class DrumTabCreate extends React.Component<Props, State>{
    fretSelection: any;
    defaultWait: number = 1000;

    constructor(props) {
        super(props);
        this.state = {
            tab: props.tab,
            currentIterIndex: 0,
            isStopRequested: false,
        };

        this.init();
    }

    init = () => {
        for (let i = 0; i < 4; i++) {
            let iter: IDrumIteration = {
                drums: [],
                timeScale: 1
            };
            for (let n = 1; n < 5; n++) {
                iter.drums.push({
                    isSelected: false
                })
            }
            this.state.tab.iterations.push(iter)
        }
        this.state.tab.iterations[0].isPlaying = true;
        this.setState(this.state);
    }

    componentWillReceiveProps = (props) => {
        this.setState({ tab: props.tab }, () => {
            if (!props.tab.iterations || !props.tab.iterations.length) {
                this.init();
            }
        })

    }

    addEmptyFragment = () => {
        const { iterations } = this.state.tab;
        for (let i = 0; i < 4; i++) {
            let iter: IDrumIteration = {
                drums: [],
                timeScale: 1
            };
            for (let n = 1; n < 5; n++) {
                iter.drums.push({
                    isSelected: false
                })
            }
            iterations.push(iter)
        }
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            }
        }, () => this.props.tabUpdate(this.state.tab));

    }

    removeLastFragment = () => {
        const { iterations } = this.state.tab;
        if (iterations.length > 4) {
            for (let i = 0; i < 4; i++) {
                iterations.pop();
            }
        }
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            }
        }, () => this.props.tabUpdate(this.state.tab));

    }

    toggleNoteSelected = (iterIndex, noteIndex) => {
        const { iterations } = this.state.tab;
        const iter: IDrumIteration = iterations[iterIndex];
        const note: IDrumNote = iter.drums[noteIndex];
        note.isSelected = !note.isSelected;
        if (note.isSelected) {
            setTimeout(() => document.getElementById(iterIndex + "_" + noteIndex).focus(), 0);
        }
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            }
        });
    }

    toggleTimeScale = (iterIndex) => {
        const { iterations } = this.state.tab;
        const iter: IDrumIteration = iterations[iterIndex];
        iter.isSelectedForTS = !iter.isSelectedForTS;
        if (iter.isSelectedForTS) {
            setTimeout(() => document.getElementById(iterIndex + "_ts").focus(), 0);
        }
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            }
        });
    }

    onChangeCurrentTs = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({
                currentTimeScaleValue: e.target.value
            })
        }
    }

    getDrumTypeByNumber = (num) => {
        switch (num) {
            case 0: return DrumType.CC2;
            case 1: return DrumType.BD;
            case 2: return DrumType.xH;
            case 3: return DrumType.S;
            case 4: return DrumType.MT;
            case 5: return DrumType.LT;
            case 6: return DrumType.CC1;
            case 10: return DrumType.LFT;

        }
    }

    changeIterNote = (iterIndex, drumIndex, e) => {
        const { iterations } = this.state.tab;
        const iter: IDrumIteration = iterations[iterIndex];
        const drum: IDrumNote = iter.drums[drumIndex];

        drum.drum = this.getDrumTypeByNumber(e.target.value);
        drum.isSelected = false;
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            },
            currentNoteValue: null
        }, () => this.props.tabUpdate(this.state.tab));
    }

    changeIterTimeScale = (iterIndex) => {
        const { iterations } = this.state.tab;
        const iter: IDrumIteration = iterations[iterIndex];

        let timeScale = this.state.currentTimeScaleValue;
        timeScale = timeScale < 0.25 ? 0.25 : timeScale > 2 ? 2 : timeScale;
        iter.timeScale = timeScale;
        iter.isSelectedForTS = false;
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations
            },
            currentTimeScaleValue: null
        }, () => this.props.tabUpdate(this.state.tab));
    }

    changeCurrentIter = (iterIndex) => {
        const { iterations } = this.state.tab;
        const iter: IDrumIteration = iterations[iterIndex];
        for (let i = 0; i < iterations.length; i++) {
            const element = iterations[i];
            element.isPlaying = false;
        }
        iter.isPlaying = true;
        this.setState({
            tab: {
                ...this.state.tab,
                iterations: iterations,
            },
            currentIterIndex: iterIndex,
        })
    }

    stop = () => {
        this.setState({ isStopRequested: true });
    }

    startPlayTab = () => {
        if (this.state.currentIterIndex < this.state.tab.iterations.length - 1) {
            const currentIteration: IDrumIteration = this.state.tab.iterations[this.state.currentIterIndex];
            const audios = [];

            for (let i = 0; i < currentIteration.drums.length; i++) {
                const note = currentIteration.drums[i];
                if (note.drum) {
                    console.log(`/drums/${DrumType[note.drum]}.aif`);
                    const audio = new Audio(`/drums/${DrumType[note.drum]}.aif`);
                    audios.push({ drum: note.drum, audio: audio });
                    audio.play();
                }
            }
            setTimeout(() =>
                this.playIter(this.state.currentIterIndex + 1, audios),
                ((60 / this.props.tempo) / this.state.tab.iterations[this.state.currentIterIndex].timeScale) * 1000);
        }

    }

    playIter = (index, oldAudios) => {
        if (!this.state.isStopRequested) {
            const currentIteration: IDrumIteration = this.state.tab.iterations[index];
            for (let i = 0; i < oldAudios.length; i++) {
                const oldAudio = oldAudios[i];
                if (currentIteration.drums.some(x => x.drum == oldAudio.drum)) {
                    oldAudio.audio.pause();
                }



            }
            this.changeCurrentIter(index);

            const audios = [];

            for (let i = 0; i < currentIteration.drums.length; i++) {
                const note = currentIteration.drums[i];
                if (note.drum) {
                    const audio = new Audio(`/drums/${DrumType[note.drum]}.aif`);
                    audios.push({ drum: note.drum, audio: audio });
                    setTimeout(() => audio.play(), 0);
                }
            }
            if (this.state.currentIterIndex < this.state.tab.iterations.length - 1) {
                setTimeout(() =>
                    this.playIter(index + 1, audios),
                    ((60 / this.props.tempo) / this.state.tab.iterations[this.state.currentIterIndex].timeScale) * 1000);
            }
        } else {
            this.setState({ isStopRequested: false })
        }

    }

    render() {
        return (
            <div style={{ height: 500, paddingLeft: '20px', maxWidth: '1100px', overflowX: 'auto', fontSize: '25px' }}>
                <div style={{ display: 'flex' }}>
                    <Fab onClick={this.startPlayTab} size="large" color="primary" style={{ marginTop: '45px', marginLeft: '15px', marginBottom: '30px' }} >
                        <PlayArrow />
                    </Fab>
                    <Fab onClick={this.stop} size="large" color="primary" style={{ marginTop: '45px', marginLeft: '15px', marginBottom: '30px' }} >
                        <Stop />
                    </Fab>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="drum-tab-row">
                        <div className="drum-progress-col" style={{ borderColor: 'transparent' }}></div>
                        <div className="drum-tab-col"><div style={{margin:'auto'}}>LH</div></div>
                        <div className="drum-tab-col"><div style={{margin:'auto'}}>RH</div></div>
                        <div className="drum-tab-col"><div style={{margin:'auto'}}>LF</div></div>
                        <div className="drum-tab-col"><div style={{margin:'auto'}}>RF</div></div>
                    </div>
                    {this.state.tab.iterations.map((iter: IDrumIteration, index) => (
                        <div key={index} className="drum-tab-row" >
                            <div onClick={() => this.changeCurrentIter(index)} className={`drum-progress-col ${iter.isPlaying ? ' drum-progress-col-current' : ''}`}></div>
                            {iter.drums.map((drum, ni) => (
                                // <div key={index + " " + ni} className="guitar-tab-col"
                                //     onClick={() => this.toggleNoteSelected(index, ni)}>{drum.isSelected ?
                                //         <input id={index + "_" + ni}
                                //             type="text"
                                //             className="guitar-note-input"
                                //             onClick={(e) => e.stopPropagation()}
                                //             onChange={(e) => this.onChangeCurrentNote(e)}
                                //             onBlur={() => this.changeIterNote(index, ni)}>
                                //         </input> : <div style={{ paddingTop: '6px' }}>{drum.fret}</div>}
                                // </div>
                                <div>
                                <TextField key={index + " " + ni}
                                    className="drum-tab-col"
                                    select
                                    label=''
                                    style={{ marginTop:'0px', marginBottom:'0px' }}
                                    value={drum.drum}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(e) => this.changeIterNote(index, ni, e)}
                                >
                                    <MenuItem value={DrumType.CC2}> CC2 </MenuItem>
                                    <MenuItem value={DrumType.BD}> BD </MenuItem>
                                    <MenuItem value={DrumType.xH}> xH </MenuItem>
                                    <MenuItem value={DrumType.S}> S </MenuItem>
                                    <MenuItem value={DrumType.MT}> MT </MenuItem>
                                    <MenuItem value={DrumType.LT}> LT </MenuItem>
                                    <MenuItem value={DrumType.CC1}> CC1 </MenuItem>
                                    <MenuItem value={DrumType.LFT}> LFT </MenuItem>
                                </TextField>
                                </div>
                            ))}
                            <div className="drum-tab-col" onClick={() => this.toggleTimeScale(index)} style={{ backgroundColor: 'lightgreen' }}>
                                {iter.isSelectedForTS ?
                                    <input id={index + "_ts"}

                                        type="text"
                                        style={{ fontSize: '22px' }}
                                        className="drum-note-input"
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => this.onChangeCurrentTs(e)}
                                        onBlur={() => this.changeIterTimeScale(index)}>
                                    </input> : <div style={{ paddingTop: '13px', fontSize: '22px' }}>{iter.timeScale}</div>}

                            </div>


                        </div>
                    ))}
                    <div style={{ display: 'grid' }}>
                        <Fab size="large" color="primary" style={{ minWidth: '57px', marginTop: '15px', marginLeft: '15px' }} onClick={this.addEmptyFragment} >
                            <AddIcon />
                        </Fab>
                        <Fab size="large" color="primary" style={{ minWidth: '57px', marginTop: '-90px', marginLeft: '15px' }} onClick={this.removeLastFragment} >
                            <Remove />
                        </Fab>
                    </div>

                </div>
            </div>
        )
    }
}