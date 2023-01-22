import React, { Component, Fragment } from "react";
import TabNav from "./src/navigation/TabNav";
import SplashScreen from "./src/screens/SplashScreen";

export default class App extends Component {
    state = {
        isVisible: true
    }
    
    hideSplashScreen=()=>{
        this.setState( prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    componentDidMount=()=>{
        console.log('App is Loading...');
        // change this with that for handling error
        let that = this;
        setTimeout(function(){
            that.hideSplashScreen();
        }, 6000);
    }   

    render() {
        const { isVisible } = this.state;
        return (
            <Fragment>
                { isVisible ? <SplashScreen/>: <TabNav/> }
            </Fragment>
        )
    }
}