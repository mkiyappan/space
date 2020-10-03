import React, { Component } from 'react';

class SpaceX extends Component {
   constructor(props){
      super(props);
      this.state = {
         missonPost: this.props.post
      }
   }
   componentWillReceiveProps =(nextProps)=> {
      console.log(nextProps)
      if(nextProps.post != this.props.post){
         this.setState({missonPost: nextProps.post})
      }
   }
   render() {
      return (
         <main className="col-md-10 ml-sm-auto col-lg-10 px-4 movies-list">
            <h7>Total Mission Count : {this.state.missonPost.length || 0 }</h7>
            <div className="col-12 col-md-12">
               <ul id="moviesList">
               {this.state.missonPost}
               </ul>
            </div>
            </main>
      );
   }
}
export default SpaceX;