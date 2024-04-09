import React from "react";
import './Nav.scss'
import {
     NavLink
  } from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <>
            <div className="topnav">
                
                
                    <li><NavLink to="/"  exact={true} style={{ textDecoration: 'none' }}>Home</NavLink></li>
                    <li><NavLink to="/todos" style={{ textDecoration: 'none' }}>Shop</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active" style={{ textDecoration: 'none' }}>Commission</NavLink></li>
                    <li><NavLink to="/user" activeClassName="active" style={{ textDecoration: 'none' }}>Shipping policy</NavLink></li>
               
            </div>
            </>
        )
    }
}

export default Nav