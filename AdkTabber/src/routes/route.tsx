import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import SongList from '../components/song/songList';
import CreateSong from '../components/song/songCreate';
import Home from '../components/home/home';
import SongDetails from '../components/song/songDetails';


export default class Routing extends React.Component {

    render() {
        return (

            <Switch>
                <Route path="/song/:id" render={(props) => <SongDetails id={props.match.params.id} {...props}/>} />
                <Route path="/home" component={Home} />
                <Route path="/song-create" component={CreateSong} />
                <Route path="/songs" component={SongList} />           
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register} />
                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            </Switch>

        );
    }
};