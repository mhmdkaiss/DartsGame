import React from 'react';
import {View,StyleSheet,ImageBackground,Dimensions, TouchableOpacity,Text} from 'react-native';
import Input from '../Components/Input';


class SignIn extends React.Component{

  state = {userName:'',password:''}

  navigatetoSignUp=()=>{
    this.props.navigation.navigate('SignUp');
  }

  navigatetoForgotPassword=()=>{
    this.props.navigation.navigate('ForgotPassword');
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

            <View style={{height:( Dimensions.get('window').height*5)/100}}/>

            <Input 
              iconName={'lock'}
              placeholder={'Password'}
              value={this.state.password}
              onChangeText={text=>this.setState({password:text})}
            />

            <View style={{height:( Dimensions.get('window').height*3)/100}}/>

            <View style={styles.textContainer}>
              <TouchableOpacity style={{flex:1}} onPress={()=>this.navigatetoSignUp()}>
               <Text style={styles.SignUpTextStyle}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.navigatetoForgotPassword()}>
               <Text style={styles.FrogetPassTextStyle}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{height:( Dimensions.get('window').height*2)/100}}/>

            <TouchableOpacity style={styles.SignInButton}>
              <Text style={styles.textStyle}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
 
};

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
        fontSize:19,
        fontWeight:'bold',
        
    }
});

export default SignIn;
