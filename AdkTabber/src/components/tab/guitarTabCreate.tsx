
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
import ITab, { TabType, IGuitarIteration, IGuitarNote } from '../../interfaces/tab';
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


export default class GuitarTabCreate extends React.Component<Props, State>{
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
            let iter: IGuitarIteration = {
                notes: [],
                timeScale: 1
            };
            for (let n = 1; n < 7; n++) {
                iter.notes.push({
                    string: n,
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
            let iter: IGuitarIteration = {
                notes: [],
                timeScale: 1
            };
            for (let n = 1; n < 7; n++) {
                iter.notes.push({
                    string: n,
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
        const iter: IGuitarIteration = iterations[iterIndex];
        const note: IGuitarNote = iter.notes[noteIndex];
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
        const iter: IGuitarIteration = iterations[iterIndex];
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

    onChangeCurrentNote = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({
                currentNoteValue: e.target.value
            })
        }
    }

    onChangeCurrentTs = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({
                currentTimeScaleValue: e.target.value
            })
        }
    }

    changeIterNote = (iterIndex, noteIndex) => {
        const { iterations } = this.state.tab;
        const iter: IGuitarIteration = iterations[iterIndex];
        const note: IGuitarNote = iter.notes[noteIndex];
        let fret = this.state.currentNoteValue;
        fret = fret < 0 ? 0 : fret > 18 ? 18 : fret;
        note.fret = fret;
        note.isSelected = false;
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
        const iter: IGuitarIteration = iterations[iterIndex];

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
        const iter: IGuitarIteration = iterations[iterIndex];
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
            const currentIteration: IGuitarIteration = this.state.tab.iterations[this.state.currentIterIndex];
            const audios = [];

            for (let i = 0; i < currentIteration.notes.length; i++) {
                const note = currentIteration.notes[i];
                if (note.fret && note.fret >= 0 && note.fret <= 4) {
                    const audio = new Audio(`/guitar/${note.string}-${note.fret}.mp3`);
                    audios.push({ string: note.string, audio: audio });
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
            const currentIteration: IGuitarIteration = this.state.tab.iterations[index];
            for (let i = 0; i < oldAudios.length; i++) {
                const oldAudio = oldAudios[i];
                if (currentIteration.notes[oldAudio.string - 1].fret
                    && currentIteration.notes[oldAudio.string - 1].fret >= 0) {
                    oldAudio.audio.pause();
                }
            }
            this.changeCurrentIter(index);
            const audios = [];

            for (let i = 0; i < currentIteration.notes.length; i++) {
                const note = currentIteration.notes[i];
                if (note.fret && note.fret >= 0 && note.fret <= 4) {
                    const audio = new Audio(`/guitar/${note.string}-${note.fret}.mp3`);
                    audios.push({ string: note.string, audio: audio });
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
                    <div className="guitar-tab-row">
                        <div className="progress-col" style={{ borderColor: 'transparent' }}></div>
                        <div className="guitar-tab-col">e</div>
                        <div className="guitar-tab-col">B</div>
                        <div className="guitar-tab-col">G</div>
                        <div className="guitar-tab-col">D</div>
                        <div className="guitar-tab-col">A</div>
                        <div className="guitar-tab-col">E</div>
                    </div>
                    {this.state.tab.iterations.map((iter: IGuitarIteration, index) => (
                        <div key={index} className="guitar-tab-row" >
                            <div onClick={() => this.changeCurrentIter(index)} className={`progress-col ${iter.isPlaying ? ' progress-col-current' : ''}`}></div>
                            {iter.notes.map((note, ni) => (
                                <div key={index + " " + ni} className="guitar-tab-col"
                                    onClick={() => this.toggleNoteSelected(index, ni)}>{note.isSelected ?
                                        <input id={index + "_" + ni}
                                            type="text"
                                            className="guitar-note-input"
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => this.onChangeCurrentNote(e)}
                                            onBlur={() => this.changeIterNote(index, ni)}>
                                        </input> : <div style={{ paddingTop: '6px' }}>{note.fret}</div>}
                                </div>
                            ))}
                            <div className="guitar-tab-col" onClick={() => this.toggleTimeScale(index)} style={{ backgroundColor: 'lightgreen' }}>
                                {iter.isSelectedForTS ?
                                    <input id={index + "_ts"}

                                        type="text"
                                        style={{ fontSize: '18px' }}
                                        className="guitar-note-input"
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => this.onChangeCurrentTs(e)}
                                        onBlur={() => this.changeIterTimeScale(index)}>
                                    </input> : <div style={{ paddingTop: '9px', fontSize: '18px' }}>{iter.timeScale}</div>}

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