import React from "react";
import Intro from "../Container/Intro/Intro";
import Header from "../Header/Header";
import Nav from "../../views/Nav/Nav";


class HomeLayout extends React.Component{
    render(){
        return(
        <>
            <Header/>
            <Intro/>
            <Nav/>
        </>
        )
    }
}

export default HomeLayout;