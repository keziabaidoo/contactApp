import React , {Componet} from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { Entypo,MaterialCommunityIcons,AntDesign ,Foundation,SimpleLineIcons } from '@expo/vector-icons';






export default function MemberProfileScreen(navigation){
    return(
           <View style={Styles.container}>
            <View style={Styles.infoText}>
        <Image source={require('../../assets/naboy.jpg')} style={Styles.imageText1}/>
        <Text style={Styles.Input1}>Peter Baiden</Text>
        <Text style={Styles.InText}>Sales Excutive</Text>
    </View>
     <TouchableOpacity style={Styles.opText}>
     <Entypo name="twitter-with-circle" size={24} color="gray" style={Styles.circleText} />
     <Entypo name="linkedin-with-circle" size={24} color="gray"  style={Styles.squareText} />
     </TouchableOpacity>

     <View style={Styles.ownText} > 
         <Foundation name="telephone" size={24} color="gray"  style={Styles.telText}/>
         <TextInput defaultValue='+22(050)2267890' style={Styles.valueText}/> 
     </View>

       <View style={Styles.outline}>
       <MaterialCommunityIcons name="email-outline" size={24} color="gray" style={Styles.emailText}/>
       <TextInput defaultValue='macKatyy@gmail.com' style={Styles.mailText}/> 
       </View>

       <View style={Styles.pinText}>
       <SimpleLineIcons name="location-pin" size={24} color="gray" style={Styles.pin1} />
        <TextInput defaultValue='Accra,Tema' style={Styles.defaultText}/>
       </View>

    
           </View>
        
    )
}

const Styles=StyleSheet.create({
    container:{
          marginHorizontal:50
    },
    defaultText:{
       left:4
    },
    pin1:{
       right:5
    },


    pinText:{
        flexDirection:'row',
        marginTop:10
    },


    emailText:{
          right:5
    },

    infoText:{
        marginTop:30,
        flexDirection:'row',
        marginVertical:20,
        paddingRight:15
    },
    InText:{
        alignSelf:'center',
        right:73,
        color:'gray',
        fontSize:12

    },
    Input1:{
        fontSize:14,
            left:5,
            color:'brown'
    },
    imageText1:{
        height:60,
            width:60,
            borderRadius:30
    },

    valueText:{
        left:10
    },
    opText:{
       flexDirection:'row' ,
       marginTop:10
    },
    circleText:{
        right:4
    },
    squareText:{
        left:3,
        
    },
    ownText:{
        marginTop:10,
        flexDirection:'row'
    },
      telText:{
          right:3
      },

      outline:{
        flexDirection:'row' ,
        marginTop:10

      },
      mailText:{
         left:5
      }
      





})