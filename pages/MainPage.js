import React , {Component} from 'react';
import {View,StyleSheet,ImageBackground,Dimensions, TouchableOpacity,Text} from 'react-native';



class MainPage extends React.Component{

    navigatetoSignIn(){
        this.props.navigation.navigate('SignIn');
    }

  render(){
    return (
      <ImageBackground style={styles.imageBackgroundStyle}  source={require('../assets/backgroundMain.png')}>
        <View style={styles.CenterContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.navigatetoSignIn.bind(this)}>
                <Text style={styles.textStyle}>Online room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Online room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Online room</Text>
            </TouchableOpacity>
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
    CenterContainer:{
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
        fontSize:20,
        fontWeight:'bold'
    }
    ,
   
});

export default MainPage;
