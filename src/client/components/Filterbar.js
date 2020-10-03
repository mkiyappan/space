import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class FilterBar extends Component {
   constructor(props){
      super(props);
      this.state = {
         isActiveYear: '',
         isActiveSuccess: '',
         isActiveLanding: '',
         booleanStatic: ['true','false']
      }
   }
   handleYearClick = (year) => {
      const yearSelection = this.state.isActiveYear !== year ? year : '';
      this.setState({isActiveYear: yearSelection},()=>{
         this.props.yearCallBack(yearSelection);
      })
   }
   handleSuccessClick = (success) => {
      const successSelection = this.state.isActiveSuccess !== success ? success : '';
      this.setState({isActiveSuccess: successSelection},()=>{
         this.props.successCallBack(successSelection);
      })
   }
   handleLandingClick = (landing) => {
      const LandingSelection = this.state.isActiveLanding !== landing ? landing : '';
      this.setState({isActiveLanding: LandingSelection},()=>{
         this.props.landingCallBack(LandingSelection);
      })
   }
   getYearContent = () => {
      let yearData = [];
      for (let i = 2006; i <= 2020; i = i + 1) {
         const activeClass = this.state.isActiveYear === i ? 'activeButton' : '';
         yearData.push(<li>
            <Button key={i} size="small" className={`yearunselected ${activeClass}`} onClick={() => this.handleYearClick(i)}>{i}</Button>
         </li>)
      }
      return yearData;
   }

   getSuccessContent = () => {
      let successData = [];
      for (let i = 0; i <= this.state.booleanStatic.length; i = i + 1) {
         const activeClass = this.state.isActiveSuccess === this.state.booleanStatic[i] ? 'activeButton' : '';
         successData.push(<li>
            <Button key={i} size="small" className={`yearunselected ${activeClass}`} onClick={() => this.handleSuccessClick(this.state.booleanStatic[i])}>{this.state.booleanStatic[i]}</Button>
         </li>)
      }
      return successData;
   }
   getLandingContent = () => {
      let landingData = [];
      for (let i = 0; i <= this.state.booleanStatic.length; i = i + 1) {
         const activeClass = this.state.isActiveLanding === this.state.booleanStatic[i] ? 'activeButton' : '';
         landingData.push(<li>
            <Button key={i} size="small" className={`yearunselected ${activeClass}`} onClick={() => this.handleLandingClick(this.state.booleanStatic[i])}>{this.state.booleanStatic[i]}</Button>
         </li>)
      }
      return landingData;
   }

   render() {
      return (
         <div>
            <nav className="col-md-2 d-none d-md-block sidebar">
               <div className="sidebar-sticky">
                  <h4 className={"color-white"}>Filters</h4>
                  <h6 className={"color-white"}>Launch Year</h6>
                  <hr />
                  <ul className="nav flex-column">
                     {this.getYearContent()}
                  </ul>
                  <h6 className={"color-white"}>Successful Launch</h6>
                  <hr />
                  <ul className="nav flex-column">
                  {this.getSuccessContent()}
                  </ul>
                  <h6 className={"color-white"}>Successful Landing</h6>
                  <hr />
                  <ul className="nav flex-column">
                  {this.getLandingContent()}
                  </ul>
               </div>
            </nav>
         </div>
      );
   }
}
export default FilterBar;