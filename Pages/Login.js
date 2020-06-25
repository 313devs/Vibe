/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Dimensions,Text,Image,StatusBar,TouchableOpacity,TextInput,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,Button} from 'react-native'

import IonIcon from 'react-native-vector-icons/FontAwesome'

let _height = Dimensions.get('window').height
let _width = Dimensions.get('window').width

class Login extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled:false
    }
    state={
      checked:false,
      Email:"",
      Password:"",
    }
    checkRegister(){
      console.log(this.state.canSign)
      if((this.state.Name).length>0){
        ()=>this.setState({canSign:true})
      }
    }
    /*componentDidUpdate(nextProps) {
        this.props = nextProps;
        ()=>{this.setState({ checked: nextProps.checked})};
    }*/
    //comment top part in the node modules code because it depracated
    render() {
        return (
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1}}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.inner}>
                    <StatusBar barStyle="light-content" hidden={true}/>
                    <Image style={{width:"100%",height:"100%",position:"absolute"}} source={require("../assets/landing.png")} />
                    <Image style={{width:_height*0.11083744,height: _height * 0.18472906 , marginBottom:_height*0.09852217}} source={require("../assets/vineAsset.png")} />
                    <View style={styles.infoBit}>
                          <View style={{marginBottom:_height * 0.04}} />
                          <View style={{width:"80%"}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <IonIcon name="chevron-left" size={30}/>
                            </TouchableOpacity>
                          </View>
                          <Text style={{fontSize:_height*0.04433498,fontFamily:"Poppins-semibold",marginBottom:"3.3557047%",width:"80%"}}>Welcome{"\n"}Back</Text>
                          <View style={{width:"80%",height:"10.9243697%",borderRadius:10,borderWidth:1,marginBottom:_height*0.03448276,paddingLeft:_width*0.03413333}}>
                            <TextInput style={{width:"100%",height:"100%",fontFamily:"poppins-regular"}}
                            ref={(input) => { this.secondTextInput = input; }}
                            placeholder="Email"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            onChangeText={(name)=>{this.setState({Email:name})}}
                            blurOnSubmit={false}
                            />
                          </View>
                          <View style={{width:"80%",height:"10.9243697%",borderRadius:10,borderWidth:1,marginBottom:_height*0.03448276,paddingLeft:_width*0.03413333}}>
                            <TextInput style={{width:"100%",height:"100%",fontFamily:"poppins-regular"}}
                            ref={(input) => { this.thirdTextInput = input; }}
                            placeholder="Password"
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={() => { this.fourthTextInput.focus();  }}
                            onChangeText={(name)=>{this.setState({Password:name})}}
                            blurOnSubmit={false}
                            />
                          </View>
                          <TouchableOpacity style={[styles.signUpBtn,{backgroundColor: this.state.Email.length>0 && 
                          this.state.Password.length>0 ?"#0052A3":"gray"}]} 
                            onPress={()=>console.log(this.state.checked)}>
                            <Text style={styles.signUp}>Sign Up</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
           
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
  height:_height*0.5862069,
  backgroundColor:"#ffffff",
  justifyContent:"space-evenly",
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
  justifyContent:"center",
  alignItems:"center",
},
signUp:{
  fontSize:18,
  fontFamily:"Poppins-Medium",
  color:"#ffffff"
},
Checkbox:{
  fontSize:_height*0.012,
  width:"65%",
  height: _height * 0.03940887,
  marginBottom: _height *  0.02463054,
  fontFamily:"Poppins-Regular",
},


});
export default Login;