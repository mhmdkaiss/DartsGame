import React from 'react';
import {View,StyleSheet,ImageBackground,Dimensions, TouchableOpacity,Text} from 'react-native';
import Input from '../Components/Input';

import {connect} from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage'

class SignUp extends React.Component{

  state = {userName:'mhmd',password:'12345678',email:'mohamad_kaiss@hotmail.com',error:'',accessToken:''}

  signUpUser(){
    try{
      fetch('http://34.253.54.11:7000/api/v1/Users/Register', {
          method: 'POST',
          
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: 
               JSON.stringify( {
              "userName": `${this.state.userName}`,
              "roleName": "Free",
              "email": `${this.state.email}`,
              "password": `${this.state.password}`,
              "enabled": true
                })                
        }).then((response) => response.json())
        .then(async(json) => {
          this.setState({error:json.result.message});
          if(json.result.accessToken){
            this.props.setAccessToken(json.result.accessToken);
            await AsyncStorage.setItem('accessToken', json.result.accessToken)
            this.props.navigation.navigate('onlineRoomMainPage');
          }
        });
       }
       catch(e){console.log(e)}
  }

  render(){
    return (
      <ImageBackground style={styles.imageBackgroundStyle}  source={require('../../assets/backgroundMain.png')}>
        <View style={styles.CenterContainer}>
            <Input 
              iconName={'account'}
              placeholder={'Username'}
              value={this.state.userName}
              onChangeText={text=>this.setState({userName:text})}
            />

            <View style={{height:( Dimensions.get('window').height*3)/100}}/>

            <Input 
              iconName={'email'}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={text=>this.setState({email:text})}
            />

            <View style={{height:( Dimensions.get('window').height*3)/100}}/>

            <Input 
              iconName={'lock'}
              placeholder={'Password'}
              value={this.state.password}
              onChangeText={text=>this.setState({password:text})}
            />

            <View style={{height:( Dimensions.get('window').height*3)/100}}/>

            {this.state.error?<Text style={styles.errorStyle}>{this.state.error}</Text>:null}
            
        {/* <Text>{this.props.accessToken}</Text> */}


            <TouchableOpacity style={styles.SignInButton} onPress={()=>this.signUpUser()}>
              <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
 
};


function mapDispatchToProps(dispatch){
  return {
    setAccessToken:(token)=> dispatch({type:'setAccessToken',payload:token}),
    removeAccessToken:()=> dispatch({type:'removeAccessToken',payload:''}),
  }
}

function mapStateToProps (state) {
  return {
    accessToken : state.accessToken
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
    imageBackgroundStyle:{
        flex:1,
        justifyContent:'center',
    }
    ,
    CenterContainer:{
        alignItems:'center',
        alignSelf:'center',
        // justifyContent:'center',
        backgroundColor:'grey',
        padding:  ( Dimensions.get('window').width*5)/100,  
        borderRadius:15,
        opacity:0.9
    }
    ,
    textContainer:{
      flexDirection:'row',
      width:( Dimensions.get('window').width*80)/100,
    }
    ,
    SignUpTextStyle:{
      color:'white',
      fontSize:16
    }
    ,
    FrogetPassTextStyle:{
      color:'white',
      fontSize:16
    }
    ,
    errorStyle:{
      color:'red',
      fontSize:18,
      fontWeight:'bold',
      marginBottom:( Dimensions.get('window').height*3)/100,
    }
    ,
    SignInButton:{
      backgroundColor:'white',
      borderRadius:10,
      width:( Dimensions.get('window').width*30)/100,
      height:( Dimensions.get('window').height*5)/100,
      alignItems:'center'
    }
    ,
    textStyle:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    }
});

