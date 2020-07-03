import React, { Component } from 'react'
import { StyleSheet, View, Dimensions,Text,Image,StatusBar,TouchableOpacity} from 'react-native'
import IonIcon from 'react-native-vector-icons/FontAwesome'

let _height = Dimensions.get('window').height
let _width = Dimensions.get('window').width

class Welcome extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled:false
    }
    render() {
        return (
          <View style={styles.Container}>
            <View style={{width:"100%",height:"89.655172%",alignItems:"center"}}>
              <View style={styles.Top}>
                <View style={{alignItems:"center", width:"100%",height:28}}>
                  <Text style={styles.topText}>Address</Text>
                  <TouchableOpacity style={{alignItems:"flex-start",justifyContent:"flex-end",width:"100%",height:"100%"}}>
                    <IonIcon name="chevron-left" size={24} style={{marginLeft:10}}/>
                  </TouchableOpacity>
                </View>
                <View style={{width:"72.2666666%",height:"29.1497975%",justifyContent:"space-between",flexDirection:"row"}}>
                  <View style={{width:_height*0.73611111*0.291497975*0.30418719,height:"100%"}}>
                    <View style={{width:"100%",aspectRatio:1,backgroundColor:"#0052A3",borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                      <Image style={{width:"52.0188679%",height:"52.0188679%"}} source={require("../assets/addressWhite.png")}/>
                    </View>
                    <Text style={{textAlign:"center",fontFamily:"poppins-regular",fontSize:_height*0.01231527,color:"#0052A3"}}>Address</Text>
                  </View> 
                  <View style={{width:_height*0.73611111*0.291497975*0.30418719,height:"100%"}}>
                    <View style={{width:"100%",aspectRatio:1,borderColor:"#0052A3",borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                      <Image style={{width:"52.0188679%",height:"52.0188679%"}} source={require("../assets/paymentsBlue.png")}/>
                    </View>
                    <Text style={{textAlign:"center",fontFamily:"poppins-regular",fontSize:_height*0.01231527}}>Payments</Text>
                  </View>
                </View>
              </View>
              <View style={{width:"91.4666666%",height:"53.4482758%",backgroundColor:"white",marginTop:_height*0.01847291,borderRadius:24}}>

              </View>
            </View>
            <View style={{width:"100%",height:"10.344828%",backgroundColor:"white"}}>

            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
      flex:1,
      backgroundColor:"#F2F4F3",
      alignItems:"center",
    },
    Top:{
      width:"100%",
      height: "30.418719%",
      borderBottomLeftRadius:55,
      borderBottomRightRadius:55,
      alignItems:"center",
      justifyContent:"space-evenly",
      backgroundColor:"#FFFFFF"
    },
    topText:{
      fontFamily:"poppins-semibold",
      position:"absolute",
      fontSize:24,
    }
});
export default Welcome;