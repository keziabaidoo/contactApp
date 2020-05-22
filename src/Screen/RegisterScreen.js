import React ,{Component} from 'react'
import { View, Text,Image ,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons';




export default function RegisterScreen({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <AntDesign name="adduser" size={60} color="brown" style={styles.userText} />
        <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>
    
        <View style={styles.mainText}>
            <Text style={styles.InnText}>Full Name</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='Kezia Baidoo'
            textAlign='right'
             />
             
        </View>


        <View style={styles.colText}>
            <Text style={styles.InnText}>Email</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='freedomsky@gmail.com'
            textAlign='right'
             />
             
        </View>



        <View style={styles.colText}>
            <Text style={styles.InnText}>Phone Number</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='+220567894680'
            textAlign='right'
             />
             
        </View>


        <View style={styles.colText}>
            <Text style={styles.InnText}>Role</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='Manager'
            textAlign='right'
             />
             
        </View>


        <View style={styles.colText}>
            <Text style={styles.InnText}>Twitter</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='@mcSons'
            textAlign='right'
             />
             
        </View>

        <View style={styles.colText}>
            <Text style={styles.InnText}>Linkedin</Text>
            <TextInput 
            style={styles.input1}
            placeholderTextColor='gray'
            placeholder='/mcsons.sayas'
            textAlign='right'
             />
             
        </View>

        <TouchableOpacity onPress={()=>{
            navigation.navigate('ContactInfo')
        }}
        style={styles.delText}>
            <Text style={styles.del1Text}>REGISTER</Text>
        </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        marginTop:5,
        marginHorizontal:30
    },
     userText:{
            alignSelf:'center',
            
     },
     profileText:{
         textAlign:'center',
         color:'brown',
         marginTop:5,


     },
     mainText:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'brown',
        
        
        
    } ,
    InnText:{
       fontSize:16,
       color:'brown'
        
    },
    input1:{
        fontSize:12
    },
    colText:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'brown',
        
    },
    delText:{
        marginVertical:20,
        borderRadius:15,
        height:42,
        backgroundColor:'brown',
        justifyContent:'center',
        marginTop:40


    },
    del1Text:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:18
        
    }
     

})