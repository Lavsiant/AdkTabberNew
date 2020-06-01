import { getAllSongs } from './songActions'
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
import ITab, { TabType } from '../../interfaces/tab';
import { stringify } from 'querystring';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GuitarTabCreate from '../tab/guitarTabCreate'
import DrumTabCreate from '../tab/drumTabCreate'
import { Tab } from '@material-ui/core';

interface Props {
    user: IUser
}

interface State {
    song: ISong;
    error: string;
    newTabType: TabType;
    currentTab?: ITab;
}


class SongList extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            song: {
                id: 0,
                name: '',
                band: '',
                tempo: 60,
                tabs: [],
                difficulty: DifficultyType.Medium
            },
            newTabType: TabType.Guitar,
            error: ''
        };
    }

    tabUpdate = (tab) => {
        const { tabs } = this.state.song;
        const t = tabs.find(x => x.name == tab.name);
        const index = tabs.indexOf(t);
        tabs[index] = tab;
        this.setState({
            song: {
                ...this.state.song,
                tabs: tabs
            }
        });
    }

    handleSubmit = (event) => {
        if (!this.state.song.name) {
            this.setState({
                ...this.state,
                error: 'Type song name please'
            })
        }
        else if (!this.state.song.band) {
            this.setState({
                ...this.state,
                error: 'Type band please'
            })
        }
        else {
            songService.createSong(this.state.song).then((res) => {
                if (res.success) {
                    //to do
                    window.location.href = '/songs';
                }
                else {
                    this.setState({
                        ...this.state,
                        error: res.errorMessage
                    });
                }
                // window.location = config.apiUrl + "/tabs";
            }).catch((ex) => {
                this.setState({
                    ...this.state,
                    error: ex
                });
            });

        }
    }

    handleGeneralChange = (e) => {
        const { name, value } = e.target;
        let { song } = this.state;
        song[name] = value;
        this.setState({ song: song });
    }

    addTab = () => {
        const { song } = this.state;
        let newTab: ITab;
        if (this.getTabTypeByNumber(this.state.newTabType) === TabType.Guitar) {
            newTab = {
                name: "Guitar tab " + song.tabs.filter(x => x.type == this.state.newTabType).length,
                type: TabType.Guitar,
                iterations: []
            }
        } else if (this.getTabTypeByNumber(this.state.newTabType)=== TabType.Drums){
            newTab = {
                name: "Drums tab " + song.tabs.filter(x => x.type == this.state.newTabType).length,
                type: TabType.Drums,
                iterations: []
            }
        }

        song.tabs.push(newTab);

        this.setState({ song: song });
        if (song.tabs.length === 1) {
            this.setState({
                currentTab: song.tabs[0],
            })
        }

    }

    renderTabCreate = () => {
        switch (this.state.currentTab.type) {
            case TabType.Guitar:
                return <GuitarTabCreate
                    tab={this.state.currentTab}
                    tempo={this.state.song.tempo}
                    tabUpdate={this.tabUpdate}
                ></GuitarTabCreate>
            case TabType.Drums:
                return <DrumTabCreate
                    tab={this.state.currentTab}
                    tempo={this.state.song.tempo}
                    tabUpdate={this.tabUpdate}
                ></DrumTabCreate>
        }
    }

    getTabTypeByNumber = (num) => {
        switch (num) {
            case 0: return TabType.Guitar;
            case 1: return TabType.Drums;
            case 2: return TabType.Piano;
        }
    }

    render() {
        const root = {
            width: '100%',
            maxWidth: '360px'
        }
        const { song } = this.state;

        return (
            <Paper className='tab-create' style={{ marginTop: 100, paddingBottom: 20 }} >
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ color: '#3f51b5' }} >SONG CREATE</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <div className='field'>
                            <TextField
                                style={{ width: '90%' }}
                                label="Name"

                                type="text"
                                name="name"
                                autoComplete="Username"
                                margin="normal"
                                variant="outlined"
                                value={song.name}
                                onChange={this.handleGeneralChange}
                                required
                            />

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='field'>
                            <TextField
                                style={{ width: '90%' }}
                                label='Band'
                                type="text"
                                name="band"
                                autoComplete="Username"
                                margin="normal"
                                variant="outlined"
                                value={song.band}
                                onChange={this.handleGeneralChange}
                                required
                            />
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <div className='field'>
                            <TextField
                                style={{ width: '90%' }}
                                label="Tempo"
                                type="text"
                                name="tempo"
                                margin="normal"
                                variant="outlined"
                                value={song.tempo}
                                onChange={this.handleGeneralChange}
                                required
                            />
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <div className='field'>
                            <TextField
                                select
                                label='Difficulty'
                                //className={styles.textField}
                                style={{ width: '90%' }}
                                value={song.difficulty}
                                name='difficulty'
                                // SelectProps={{
                                //     MenuProps: styles
                                // }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleGeneralChange}
                            >
                                <MenuItem value={DifficultyType.Easy}> Easy </MenuItem>
                                <MenuItem value={DifficultyType.Medium}> Medium </MenuItem>
                                <MenuItem value={DifficultyType.Hard}> Hard </MenuItem>
                            </TextField>

                        </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <div className='field'>
                            <TextField
                                select
                                label='Select type for new tab'
                                //className={styles.textField}
                                style={{ width: '90%' }}
                                value={this.state.newTabType}
                                name='difficulty'
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => {
                                    this.setState({ newTabType: this.getTabTypeByNumber(e.target.value) })
                                }}
                            >
                                <MenuItem value={TabType.Guitar}> Guitar </MenuItem>
                                <MenuItem value={TabType.Drums}> Drums </MenuItem>
                                <MenuItem value={TabType.Piano}> Piano </MenuItem>
                            </TextField>
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={1}>
                        <div>
                            <Fab size="large" color="primary" style={{ margin: 'auto', marginTop: '45px', marginLeft: '-120px' }} onClick={this.addTab}>
                                <AddIcon />
                            </Fab>
                        </div>
                    </Grid>

                    {this.state.currentTab ?
                        <Grid item xs={12}>

                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '290px', minWidth: '290px', float: 'left', border: '2px solid #3f51b5', borderRadius: '5px' }}>
                                    <List component="nav" style={root}>
                                        {this.state.song.tabs.map((tab: ITab) => (
                                            <ListItem style={tab === this.state.currentTab ? { background: 'rgba(0, 0, 0, 0.08)' } : {}}
                                                button onClick={() => {
                                                    this.setState({ currentTab: tab });
                                                    this.state = {
                                                        ...this.state,
                                                        currentTab: tab
                                                    }
                                                }}>
                                                <ListItemText primary={tab.name} />
                                            </ListItem>
                                        ))}
                                        <Divider />
                                    </List>
                                </div>
                                <Paper style={{ width: '100%', height: '-webkit-fill-available' }}>
                                    {this.renderTabCreate()}
                                </Paper>
                            </div>
                        </Grid> : null}

                    {/* 

                   
                  
                 
                    {this.state.currentTab ?
                        <div style={{ border: '1px solid black' }}>
                            {this.state.song.tabs.map((tab: ITab) => {
                                return (
                                    <span onClick={() => this.setState({ currentTab: tab })}>
                                        {tab.name}
                                    </span>
                                )
                            })}
                            )}
                            <div>

                            </div>
                        </div>

                        : null}

                    <div className="form-group">
                        <Button size='large' variant="contained" type='button' onClick={this.handleSubmit} style={{ marginBottom: 20 }} color="primary"> Create </Button>
                    </div>
                    {this.state.error ?
                        <div style={{ color: 'red' }}> {this.state.error} </div> : null} */}
                </Grid >
            </Paper >
        )
    }
}

let mapProps = (state: any) => {
    return {
        user: state.authReducer.user
    }
}

const mapDispatch = (dispatch: AppDispatch) => bindActionCreators(
    {
        getAllSongs: getAllSongs.action
    },
    dispatch);



export default connect(mapProps, mapDispatch)(SongList)

