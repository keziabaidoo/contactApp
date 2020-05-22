import React, {Component} from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'





export default function WelcomeScreen({navigation}){
       
    return(
        <View style={styles.container}>
            <View>
            <Image source= {require('../../assets/ampy.jpg')}  style={styles.imageContainer}/>
        </View>
        

          <View style={styles.textInfo}>
          <Text style={styles.textInput}>AMPERSAND</Text>
        <Text style={styles.textIn}>CONTACTS</Text>
          </View>
       
      
       <TouchableOpacity onPress={()=>{
           navigation.navigate('WelcomeDetailed')
       }}
       style={styles.opaInfo}>
           <Text style={[styles.opaText,styles.underline]}>GET STARTED</Text>
       </TouchableOpacity>
        </View>

    )
}


const styles=StyleSheet.create({
    container:{
        marginHorizontal:50,
    

        
        

        
        
    },

    imageContainer:{
  height:100,
  width:250,
  marginVertical:30,
  alignSelf:'center',
  marginTop:80,
  
  
  
  
    },

    textInfo:{
        marginVertical:50,
        alignSelf:'center',
        
    },
    textInput:{
        marginVertical:30,
        marginBottom:3,
        fontSize:16,
        color:'brown'
        

        
    },
    textIn:{
        marginTop:1,
        marginVertical:30,
        fontSize:16,
        color:'brown'
        
    
    },

    opaInfo:{
        marginHorizontal:20,
        borderColor:'gray'
         
    },
    opaText:{
        alignSelf:'center',
        marginVertical:70,
        fontSize:16, 
        padding:10 
        
    },
    underline:{
          borderBottomColor:'brown',
          borderBottomWidth:1,
          fontSize:16,
          paddingBottom:4
    }


})