import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "isomorphic-fetch";
import ISong, { DifficultyType }  from '../../interfaces/song';
import IUser from '../../interfaces/IUser';


interface Props {
    id: number;
    user: IUser
}

interface State {
    song: ISong

}

class SongDetails extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            song: null
        };
    }

    componentDidMount() {          
    }


    render() {
        return (
            <div></div>)
    }
}

let mapProps = (state: any) => {
    return {
        user: state.authReducer.user
    }
}


export default connect(mapProps)(SongDetails)