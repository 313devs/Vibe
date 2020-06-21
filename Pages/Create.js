/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Dimensions,Text,Image,StatusBar,TouchableOpacity} from 'react-native'

let _height = Dimensions.get('window').height
let _width = Dimensions.get('window').width

class Create extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled:false
    }
    render() {
        return (
          <View style={styles.Container}>
            <StatusBar barStyle="light-content"/>
            <Image style={{width:"100%",height:"100%",position:"absolute"}} source={require("../assets/landing.png")} />
            <Image style={{width:_height*0.11083744,height: _height * 0.18472906 , marginBottom:_height*0.0492610837}} source={require("../assets/vineAsset.png")} />
            <View style={styles.infoBit}>
              <Image style={{width:_height*0.25,height:_height*0.25,marginBottom:_height*0.01}}source={require("../assets/vibeLogo.png")} />
              <Text style={styles.text}>
                Welcome to Vibe Essentials.{"\n"} We deliver you the whole vibe.  With a few simple taps on our app, get your favourite shisha, vodka, tobacco and many more delivered fast to your door. Enjoy!
              </Text>
              <TouchableOpacity style={styles.signUpBtn}>
                <Text style={styles.signUp}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signInBtn}>
                <Text style={styles.signIn}>Sign In</Text>
              </TouchableOpacity>
            </View>        
          </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    infoBit:{
      width:"100%",
      height:"70.8128078%",
      backgroundColor:"#ffffff",
      justifyContent:"flex-end",
      alignItems:"center",
      zIndex:10,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    signInBtn:{
      width:"80%",
      height:_width * 0.13866667,
      marginBottom:_height * 0.0738916256,
      borderRadius:10,
      borderWidth:3,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#ffffff",
      borderColor:"#0052A3",
    },
    signUpBtn:{
      width:"80%",
      height:_width * 0.13866667,
      marginBottom:_height * 0.0738916256 / 2,
      borderRadius:10,
      borderWidth:3,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#0052A3",
      borderColor:"#0052A3",
    },
    signIn:{
      fontSize:18,
      fontFamily:"Poppins-Medium"
    },
    signUp:{
      fontSize:18,
      fontFamily:"Poppins-Medium",
      color:"#ffffff"
    },
    text:{
      fontSize:14,
      width:"93.3333333%",
      height: _width * 0.22666667,
      marginBottom: _height * 0.05,
      fontFamily:"Poppins-Regular",
      textAlign:"center"
    },

});
export default Create;