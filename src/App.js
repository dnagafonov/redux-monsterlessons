import React from 'react';
import {connect} from "react-redux";
import {getTracks} from './actions/tracks'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {track:''}
    }

    addTrackChange(){
        if(!(this.trackInput.value === '')){
            console.log('addTr: ', this.trackInput.value);
            this.props.onAddTrack(this.trackInput.value);
            this.trackInput.value = '';
        }
    }

    findTrack(){
        console.log('search: ', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

  render() {
    return (
        <div>
            <div className="Track">
                <input type='text' ref={(input) => {this.trackInput = input}}/>
                <button onClick={this.addTrackChange.bind(this)}>Add Track</button>
            </div>
            <div className="Filter">
                <input type='text' ref={(input) => {this.searchInput = input}}/>
                <button onClick={this.findTrack.bind(this)}>Find Track</button>
            </div>
            <div className="Thunk">
                <label>
                    If u want to get some song with "Thunk" press =><button onClick={this.props.onGetTracks}>Get tracks</button>
                </label>
            </div>
            <ul>
                {this.props.tracks.map((track, index) => <li key={index}>{track.name}</li>)}
            </ul>
        </div>
    );
  }
}

export default connect(
    state => ({
      tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name) => {
            dispatch({type: "FIND_TRACK", payload: name})
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
