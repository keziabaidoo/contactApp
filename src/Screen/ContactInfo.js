import React, { Component } from "react"
import { View,Text,StyleSheet,TouchableOpacity ,Image} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';






    export default function ContactInfo({navigation}){
        return(
            <View style={Styles.container}>
                <View style={Styles.mainText}>
                <Text style={Styles.Text1}>Exchange Contact Information</Text>
                <Text style={Styles.colText}>Scan this QR below to share your contacts</Text>
                </View>

                <TouchableOpacity>
                <MaterialCommunityIcons name="qrcode" size={120} color="black" style={Styles.qrText} />
                </TouchableOpacity>
                <View style={[Styles.imageInfo,Styles.underline]}>
                    <Image source={require('../../assets/naboy.jpg')} style={Styles.imageText}/>
                    <Text style={Styles.TextInput}>Jona Mcson</Text>
                    <Text style={Styles.textIn}>Head Of Marketing</Text>
                </View>

                <View style={Styles.scanInfo}>
                    <Text style={Styles.scanText}>Want to add a new connection?</Text>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('MyProfileScreen')
                    }}
                    
                    style={Styles.qText1}>
                        <Text style={Styles.qText}>Scan QR</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        )
    }



    const Styles=StyleSheet.create({
        container:{
            marginHorizontal:50
        },
      
        mainText:{
            
        },

        qText:{
           left:3,
           
        },

        qText1:{
            borderRadius:1,
           borderColor:'brown',
           borderWidth:1,
           flex:1
        },

        

        scanInfo:{
            marginTop:60,
            flexDirection:'row'
        },
         
        scanText:{
           color:'gray',
           right:15

        },
           
        Text1:{
            marginTop:20,
            color:'brown',
            fontSize:18
        },
        colText:{
            marginTop:10,
            fontSize:14,
            color:'gray'
        },
        qrText:{
            marginTop:50,
            marginHorizontal:70,

            
        },
        imageInfo:{
            marginTop:30,
            flexDirection:'row',
            marginVertical:20,
            paddingRight:15
        },

       underline:{
         borderBottomWidth:1,
         paddingBottom:80,
         
          
        },
          

        imageText:{
            height:60,
            width:60,
            borderRadius:30
        },
        TextInput:{
            fontSize:14,
            left:5,
            color:'brown'

        },
        textIn:{
            alignSelf:'center',
            right:73,
            color:'gray',
            fontSize:12



        }
        
    })
 