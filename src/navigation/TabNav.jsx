import React, {Component, Fragment} from 'react';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default class TabNav extends Component{
    render(){
        return(
            <Fragment>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName={Home}
                        screenOptions={({ route })=> ({                       
                            tabBarIcon: ({ source, style }) =>{
                                if(route.name==='Home'){
                                    source = require('../assets/images/home.png');
                                    style  = { width: 20, height: 20 };
                                } else if( route.name ==='Details'){
                                    source = require('../assets/images/more.png');
                                    style  = { width: 20, height: 20 };
                                } else if( route.name ==='Profile'){
                                    source = require('../assets/images/profile.png');
                                    style  = { width: 20, height: 20 };
                                } else if( route.name ==='Settings'){
                                    source = require('../assets/images/settings.png');
                                    style  = { width: 20, height: 20 };
                                }
                                return <Image source={source} style={style} />;
                            },
                       
                            "tabBarActiveTintColor": "#FF6F00",
                            "tabBarInactiveTintColor": "#263238",
                            "tabBarLabelStyle": {
                                "paddingBottom": 10,
                                "fontsize": 12
                            },
                            "tabBarStyle": [
                                {
                                "display": "flex"
                                },
                                null
                            ]
                        })} >                 

                        <Tab.Screen name="Home"      component={Home}/>
                        <Tab.Screen name="Details"   component={Details}/>  
                        <Tab.Screen name="Profile"   component={Profile}/>
                        <Tab.Screen name="Settings"  component={Settings}/>
                    </Tab.Navigator>
                </NavigationContainer>    
            </Fragment>
        )
    }
}