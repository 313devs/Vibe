/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Dimensions,Text,Image,StatusBar,TouchableOpacity,Share} from 'react-native'



let _height = Dimensions.get('window').height
let _width = Dimensions.get('window').width

class Refer extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled:false
    }
    onShare = async () => {
      try {
        await Share.share({
          title: 'React Native Share',
          message:
            '',
        });
  
      } catch (error) {
        console.log(error.message);
      }
    };
    render() {
        return (
                  <View style={styles.inner}>
                    <Image style={{width:"100%",height:"100%",position:"absolute"}} source={require("../assets/landing.png")} />
                    <StatusBar barStyle="light-content"/>
                    <Image style={{width:_height*0.11083744*1.5,height: _height * 0.18472906*1.2 , marginBottom:_height*0.0292610837}} source={require("../assets/vibeNoText.png")} />
                    <View style={styles.infoBit}>      
                          <View style={{backgroundColor:"#ffffff",width:"20%",height:_width*0.2,borderRadius:_width*0.2/2,marginBottom:_height*0.65178571*0.02,justifyContent:"center",alignItems:"center"}}>
                          <Image style={{width:"60%",height:"60%"}} source={require("../assets/refer.png")}/>
                          </View>    
                          <Text style={{fontSize:_height*0.04433498,fontFamily:"Poppins-semibold",marginBottom:"3.3557047%",width:"80%",textAlign:"center",color:"#0066CC"}}>Refer Friends</Text>
                          <Text style={{fontSize:_height*0.04433498/2,fontFamily:"Poppins-semibold",marginBottom:"3.3557047%",width:"80%",textAlign:"center",color:"#0066CC"}}>28765</Text>
                          <Text style={styles.text}>Refer your friends and recieve £10 off in your next purchase.You will recive this amount after your friend has done their first purchase</Text>
                          <TouchableOpacity style={styles.signUpBtn} 
                            onPress={()=>{this.onShare()}}>
                            <Text style={styles.signUp}>Share</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.dismissBtn} 
                            onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={styles.dismiss}>Dismiss</Text>
                          </TouchableOpacity>
                    </View>
                  </View>
        );
    }
}
const styles = StyleSheet.create({
inner: {
    flex: 1,
    alignItems:"center",
    justifyContent:"flex-end"
},

infoBit:{
  width:"100%",
  height:"65.178571%",
  backgroundColor:"#F6F5F5",
  justifyContent:"flex-end",
  alignItems:"center",
  zIndex:10,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
},
signUpBtn:{
  width:"80%",
  height:_width * 0.13866667,
  marginBottom:_height * 0.0838916256 / 2,
  borderRadius:10,
  backgroundColor:"#0052A3",
  justifyContent:"center",
  alignItems:"center",
},
signUp:{
  fontSize:18,
  fontFamily:"Poppins-Medium",
  color:"#ffffff"
},
dismissBtn:{
  width:"80%",
  height:_width * 0.13866667,
  marginBottom:_height * 0.0438916256 / 2,
  borderRadius:10,
  backgroundColor:"#F6F5F5",
  justifyContent:"center",
  alignItems:"center",
},
dismiss:{
  fontSize:18,
  fontFamily:"Poppins-Medium",
  color:"#003D7A"
},
text:{
  fontSize:14,
  width:"93.3333333%",
  height: _width * 0.22666667,
  marginBottom: _height * 0.02678571/2,
  fontFamily:"Poppins-Regular",
  textAlign:"center"
},
});
export default Refer;