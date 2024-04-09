import React from "react";
import './Intro.scss'

class Intro extends React.Component{
    render(){
        return(
            <>
                <div class="intro">
                    <div class="intro__title">
                        
                        <div class="intro__title-branding">
                            <h1><i>SleepyCo</i></h1>
                        </div>

                        <div class="intro__title-description">
                            <h4>This is where I will write some things about the products, <br/> about the company, or maybe write a mission statement.</h4>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Intro;