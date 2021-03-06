/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Dimensions,Text,Image,StatusBar,TouchableOpacity} from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();
import Checkout from "./Pages/Checkout"
import Welcome from "./Pages/Welcome"
import Create from "./Pages/Create"
import Login from "./Pages/Login"
import Ref from "./Pages/Refer"

const Stack = createStackNavigator()


let _height = Dimensions.get('window').height
let _width = Dimensions.get('window').width

class App extends React.Component {
  static navigationOptions = {
    header: null
}
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Checkout" component={Checkout}/>
              <Stack.Screen name="Ref" component={Ref}/>
              <Stack.Screen name="welcome" component={Welcome}/>
              <Stack.Screen name="Create" component={Create}/>
              <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

export default App;