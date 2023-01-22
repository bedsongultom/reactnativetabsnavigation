import { Component, Fragment } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class SplashScreen extends Component{
    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                    <View style={styles.rootView}>
                        <Image source={require('../assets/images/launch_screen.png')}/>
                    </View>
                </View>
            </Fragment>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
    },
    rootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute', 
        width: '100%',
        height: '100%',
    },
})