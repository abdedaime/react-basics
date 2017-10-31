import React from "react";
import {render} from "react-dom";

export const Header = (props)=>{

       return (
       <nav className="nav navbar-default">
          <div  className="container">
              <div  className="navbar-header">
                <ul className="nav navbar-nav">
                  <li> <a href="#"> {props.linkHome} </a></li>
                </ul>
              </div>
          </div>
       </nav>
       );
}