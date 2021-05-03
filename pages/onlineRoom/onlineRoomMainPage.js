import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground,Dimensions, TouchableOpacity,Text, Button} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import {connect} from 'react-redux'

import BackgroundTimer from 'react-native-background-timer';

class onlineRoomMainPage extends React.Component{

  componentDidMount(){
    // BackgroundTimer.runBackgroundTimer(() => {
    //   this.props.runTimer(1);
    //   console.log(this.props.time)
    //   if(this.props.time>=5){
    //     this.props.rerunTimer(0)
    //     console.log('run post method')
    //   }
    //   }, 
    //   1000)
  }

  gotoHome(){
    this.props.navigation.navigate('MainPage')
  }

  async logout(){
    await AsyncStorage.removeItem('accessToken')
    this.props.navigation.navigate('MainPage')
    this.props.removeAccessToken();

    BackgroundTimer.stopBackgroundTimer();
  }

  render(){
    return (
      <ImageBackground style={styles.imageBackgroundStyle} >
        <View style={styles.buttonsContainer}>
          <Text>{this.props.accessToken}</Text>
          <Text style={styles.textStyle}>online room</Text>
          <Button title={'logout'} onPress={()=>this.logout()}/>
          <Button title={'go back'} onPress={()=>this.gotoHome()}/>
        </View>
      </ImageBackground>
    )
  }
 
};

function mapStateToProps (state) {
  return {
    accessToken : state.accessToken,
    time: state.time,
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeAccessToken :() => dispatch({type:'removeAccessToken',payload:' '}),
    runTimer : (time) => dispatch({type:'runTimer', payload:time}),
    rerunTimer : (time) => dispatch({type:'rerunTimer', payload:time}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(onlineRoomMainPage);

const styles = StyleSheet.create({
    imageBackgroundStyle:{
        flex:1,
    }
    ,
    buttonsContainer:{
        alignItems:'center',
        alignSelf:'center',
        flex:1,
        justifyContent:'center'
    }
    ,
    buttonStyle:{
        backgroundColor:'white',
        width:( Dimensions.get('window').width*80)/100,
        height:( Dimensions.get('window').height*10)/100,
        opacity:0.8,
        margin:( Dimensions.get('window').height*3)/100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
    ,
    textStyle:{
        color:'black',
        fontSize:22
    }
    ,
   
});
