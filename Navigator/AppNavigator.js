import { createAppContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from "../Pages/Welcome"
import Create from "../Pages/Create"

const AppNavigator = createStackNavigator({
    welcome: { screen:Welcome},
    create: { screen:Create},
},);
export default createAppContainer(AppNavigator);