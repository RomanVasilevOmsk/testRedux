import React, { Component } from 'react';
import {connect} from "react-redux";
import { GetTracks } from './actions/tracks';
import { Link } from 'react-router';

class StoreForm extends Component {
  // constructor(props){
  //     super(props);
  // };

  addTrack (event) {
    event.preventDefault();
    console.log('AddTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  findTrack (event){
    event.preventDefault();
    this.props.onFindTrack(this.searchInput.value);
    console.log('Find Track', this.searchInput.value);
    // this.searchInput.value = '';
  };
  onGetTracks (event){
    event.preventDefault()
  };
  render() {
    return (
      <div className="App">
        <h1>Store form</h1>
       <form>

         <div>
           <input
             type="text"
             placeholder="Store"
             ref={(input) => { this.trackInput = input  }}
           />
           <button onClick={this.addTrack.bind(this)}>Add track</button>
         </div>

         <div>
           <input
             type="text"
             placeholder="Store"
             onChange={this.findTrack.bind(this)}
             ref={(input) => { this.searchInput = input  }}
           />
           <button >Find Track</button>
         </div>

         <div>
           <button onClick={this.props.onGetTracks} >Get tracks</button>
         </div>

       </form>
        <ul >
          {this.props.tracks.map(( tracks, index ) =>
              <li key={index}>
                <Link to={`/tracks/${tracks.id}`}>{tracks.name}</Link>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  //mapStateToProps мапит стейт изстора в пропсы компонента. Подписка на стор
  //Если меняется пропсы, то мы перерендериваем компонент
  state => ({
    tracks : state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({

    onAddTrack: (name) => {
      const payload ={
        id : Date.now().toString(),
        name
      };
      dispatch({ type:'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      console.log('NAME:', name);
      dispatch({  type:'FIND_TRACK', payload: name})
    },
    onGetTracks:(event) => {
      event.preventDefault();
      dispatch(GetTracks());
    }
  })
)(StoreForm);