import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground} from 'react-native';
import MainPage from './pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onlineRoomMainPage from './pages/onlineRoom/onlineRoomMainPage';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import SignUp from './pages/Authentication/SignUp';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import tokenReducer from './reducers/tokenReducer'

import AsyncStorage from '@react-native-community/async-storage'

const store = createStore(tokenReducer);

const HomeStack = createStackNavigator();

function UserSignedIn() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="onlineRoomMainPage" component={onlineRoomMainPage} options={{headerShown: false}} />
        <HomeStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle: false}} />
        <HomeStack.Screen name="MainPage" component={MainPage} options={{headerShown: false}} />
        <HomeStack.Screen name="SignIn" component={SignIn} options={{headerTitle: 'Sign In'}} />
        <HomeStack.Screen name="SignUp" component={SignUp} options={{headerTitle: 'Sign Up'}} />
    </HomeStack.Navigator>
  );
}

function UserNotSignedIn() {
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

  state={accessToken:' '}

  async componentDidMount(){
    const accessToken = await AsyncStorage.getItem('accessToken')
    this.setState({accessToken:accessToken})
  }

  render(){
    
    if(this.state.accessToken!=null){
      return (
        <Provider store={store}>
          <NavigationContainer>
            <UserSignedIn/>
          </NavigationContainer>
        </Provider>      
      )
    }
    else{
      return (
        <Provider store={store}>
          <NavigationContainer>
            <UserNotSignedIn/>
          </NavigationContainer>
        </Provider>      
      )
    }
  }
 
};

export default App;
