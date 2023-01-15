import React, { Component, Fragment } from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Details extends Component {
    componentDidMount=()=>{
        console.log('Details is Mounting');
    }

    render() {
        return(
            <Fragment>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Details Tabs
                    </Text>
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
        fontFamily: 'BaiJamjuree-Regular',
        alignSelf: 'center',
        //textAlign: 'center'

      }
});