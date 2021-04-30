import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground,Dimensions, TouchableOpacity,Text} from 'react-native';



class onlineRoomMainPage extends React.Component{

  

  render(){
    return (
      <ImageBackground style={styles.imageBackgroundStyle} >
        <View style={styles.buttonsContainer}>
          <Text style={styles.textStyle}>online room</Text>
        </View>
      </ImageBackground>
    )
  }
 
};

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

export default onlineRoomMainPage;
