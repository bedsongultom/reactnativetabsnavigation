import React, { Component, Fragment } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default class Home extends Component{ 
    componentDidMount=()=>{
        console.log('Home is Mounting');
    }   
    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                    <Text style={styles.title}>Home Tabs</Text>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#ecf0f1',

    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        fontWeight: 'bold',
        fontFamily: "BaiJamjuree-Bold",
        alignSelf: 'center',
      }
});


