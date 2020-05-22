import React, {Component} from 'react'
import {View, Image,Text,StyleSheet,TouchableOpacity} from 'react-native'




export default function WelcomeDetailedScreen({navigation}){
    return(
         <View style={styles.container}>
              <View style={styles.imageContainer}>
                  <Image source={require('../../assets/real.jpg')} style={styles.imageContainer}/>
              </View>
                <View style={styles.colText}>
                <Text style={styles.realText1}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
              <Text style={styles.realText2}>Sign in or register with your Ampersand email</Text>
                </View>
                   
                   <View style={styles.mainText}>
                   <TouchableOpacity  onPress={()=>{
                       navigation.navigate('RegisterScreen')
                   }}>
                      <Text style={styles.regText}>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={()=>{
                      navigation.navigate('LoginScreen')
                  }}>
                      <Text style={styles.logText}>Login</Text>
                  </TouchableOpacity>
              
          </View>
                   </View>
                 
    )
}

const styles=StyleSheet.create({
    container:{
      marginTop:1,
        flexDirection:'column'
    },
    imageContainer:{
        
        height:300,
        width:400
        
    },
    colText:{
        marginHorizontal:20
    },
    realText1:{
        marginTop:10,
        alignItems:'center',
        color:'brown'
    },
    realText2:{
        marginTop:10,
        color:'gray'
    },
    
    regText:{
        paddingBottom:5,
         borderBottomWidth:1,
         borderBottomColor:'brown',
         fontSize:16
    },


    logText:{
         paddingBottom:5,
         borderBottomWidth:1,
         borderBottomColor:'brown',
         fontSize:16
    },
    mainText:{
        marginHorizontal:20,
        marginTop:150,
        flexDirection:'row',
        justifyContent:'space-between'
    }
    

})