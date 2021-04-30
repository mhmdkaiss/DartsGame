import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground} from 'react-native';
import MainPage from './pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onlineRoomMainPage from './pages/onlineRoomMainPage';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import SignUp from './pages/Authentication/SignUp';

const HomeStack = createStackNavigator();

function MainStackScreen() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="MainPage" component={MainPage} options={{headerShown: false}} />
        <HomeStack.Screen name="SignIn" component={SignIn} options={{headerTitle: 'Sign In'}} />
        <HomeStack.Screen name="SignUp" component={SignUp} options={{headerTitle: 'Sign Up'}} />
        <HomeStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle: false}} />
        <HomeStack.Screen name="onlineRoomMainPage" component={onlineRoomMainPage} options={{headerShown: false}} />
   </HomeStack.Navigator>
  );
}

class App extends React.Component{
  
  render(){
    return (
    
      <NavigationContainer>
        <MainStackScreen/>
      </NavigationContainer>
      
    )
  }
 
};

const styles = StyleSheet.create({
 
});

export default App;
