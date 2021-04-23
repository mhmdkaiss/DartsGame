import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground} from 'react-native';
import MainPage from './pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onlineRoomMainPage from './pages/onlineRoomMainPage';
import SignIn from './pages/Authentication/SignIn';

const HomeStack = createStackNavigator();

function MainStackScreen() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="MainPage" component={MainPage} options={{headerShown: false}} />
        <HomeStack.Screen name="SignIn" component={SignIn} options={{headerTitle: null}} />
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
