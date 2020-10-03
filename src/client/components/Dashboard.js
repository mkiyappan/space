import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import FilterBar from './FilterBar';
import SpaceX from './SpaceX';
import './../css/bootstrap.min.css';
import './../css/style.css';

class Dashboard extends Component {
   constructor(props){
      super(props);
      this.state = {
         missonPost: [],
         selectedYear: '',
         selectedSuccess: '',
         selectedLanding: ''
      }
   }
   yearCallBack =(year)=> {
      const yearSelection = this.state.selectedYear !== year ? year : '';
      this.setState({selectedYear: yearSelection}, ()=>{
         this.renderMission();
      });
   }
   successCallBack =(success)=> {
      const successSelection = this.state.successSelection != success ? success : '';
      this.setState({selectedSuccess: successSelection}, ()=>{
         this.renderMission();
      });
   }
   landingCallBack =(landing)=> {
      const successSelection = this.state.selectedLanding != landing ? landing : '';
      this.setState({selectedLanding: successSelection}, ()=>{
         this.renderMission();
      });
   }
   componentDidMount =()=> {
      this.renderMission();
   }
   constructFilterURL=()=>{
      const getParameters = this.getFilterValue();
      const selectedYear = getParameters.selectedYear ? `&launch_year=${getParameters.selectedYear}` : '';
      const selectedSuccess = getParameters.selectedSuccess ? `&launch_success=${getParameters.selectedSuccess}` : '';
      const selectedLanding = getParameters.selectedLanding ? `&land_success=${getParameters.selectedLanding}` : '';
      const url = `https://api.spaceXdata.com/v3/launches?limit=100${selectedSuccess}${selectedLanding}${selectedYear}`;
      return url;
   }
   getFilterValue = ()=>{
      const { selectedYear, selectedSuccess, selectedLanding } = this.state;
      const filterObj = { selectedYear, selectedSuccess, selectedLanding};
      return filterObj;
   }
   renderMission = async() => {
      try {
        let result = await axios.get(this.constructFilterURL());
        let missionList = result.data;
        // This will re render the view with new data
        let missonPost = missionList.map((item, i) => (
         <li key={i} className="justify-content-between d-flex my-4" id="112233">
            <img src={item.links.mission_patch_small} />
            <p className="movie-content title">{`${item.mission_name} #${item.flight_number}`}</p>
            <p className="movie-content"><h7>Misson Ids:</h7> {item.mission_id.toString() || 'Not Available'} </p>
            <p className="movie-content"><h7>Launch Year:</h7> {item.launch_year}</p>
            <p className="movie-content"><h7>Successful Launch:</h7> {item.launch_success ? 'True' : 'False'}</p>
            <p className="movie-content"><h7>Successful Landing:</h7> {item.upcoming ? 'True' : 'False'}</p>
         </li>
         ))
        this.setState({missonPost});
      } catch (err) {
        console.log(err);
      }
    }
   render() {
      return (
         <div>
            <Header />
            <div className="container-fluid">
               <div className="row">
                  <FilterBar
                   yearCallBack = {(year)=>this.yearCallBack(year)}
                   successCallBack = {(success)=>this.successCallBack(success)}
                   landingCallBack = {(landing)=>this.landingCallBack(landing)}
                  />
                  <SpaceX 
                     post= {this.state.missonPost}
                  />
               </div>
            </div>
           <Footer/>
         </div>
      );
   }
}
export default Dashboard;