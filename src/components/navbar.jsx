import React, { Component } from "react";

const NavBar = ({totalCounters}) => {



    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            
          <div className="container" >
            <a className="navbar-brand" href="#" algin ='left'>
              Cart{" "}
              <span className="badge badge-pill badge-secondary">
                {totalCounters}
              </span>

            </a>
          </div>
          
        </nav>
      );
}
 
export default NavBar;

// class NavBar extends Component {
//   render() {
    
//   }
// }

// export default NavBar;
