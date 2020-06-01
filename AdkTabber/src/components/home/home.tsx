import * as React from 'react';

interface HomeProps {

}

export default class Home extends React.Component<HomeProps>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <img style={{width: '600px'}} src="/styles/music-logo-design.jpg"/>
                <h1 style= {{ fontSize: '3rem', color: '#1976d2'}}>Advanced DK Tabber</h1>
                <h2 style= {{ fontSize: '1.5rem', color: '#1976d2'}}>Create your own composition in easy way!</h2>
            </div>
        );
    }
}