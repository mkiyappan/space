import React, { Component } from 'react';

class Header extends Component {
   
   render(){
      return(
         <div>
            <header className="blog-header py-3">
               <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <a className="navbar-brand text-white" href="#">SpaceX Launch Programs</a>
               </nav>
	         </header>
         </div>
      );
   }
}
export default Header;