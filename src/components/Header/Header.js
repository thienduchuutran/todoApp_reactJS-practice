import React from "react";
import './Header.scss'

class Header extends React.Component{
    render(){
        return(
            <>
            <div className="header">
                <div class="header__info">
                    <p>Shipping or sales information</p>
                </div>
            </div>
            </>
        )
    }
}

export default Header;