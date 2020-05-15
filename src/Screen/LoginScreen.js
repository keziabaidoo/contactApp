import React, {Component} from 'react'
import { View,Image,Text,StyleSheet ,TextInput,TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



export default function LoginScreen({navigation}){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.imageInfo}>
                <Image source={require('../../assets/piven.jpg')}  style={styles.imageText}/>
            </View>

            <View style={styles.colText}>
            <Text style={styles.InnText}>Email</Text>
            <TextInput 
            style={styles.input2}
            placeholderTextColor='gray'
            placeholder='kezyson@gmail.com'
            textAlign='right'
             />
             
        </View>


        <View style={styles.culText}>
            <Text style={styles.InText}>Password</Text>
            <TextInput 
            style={styles.input2}
            placeholderTextColor='gray'
            placeholder='Password'
            secureTextEntry={true}
            textAlign='right'
             />
             
        </View>
          <View>
          <TouchableOpacity style={styles.delText}>
            <Text style={styles.del1Text}>REGISTER</Text>
        </TouchableOpacity>
          </View>
       
        

        <TouchableOpacity style={styles.gotText}>
            <Text style={styles.ol1Text}>Forgot?</Text>
            <Text style={styles.ol2Text}>Reset Password</Text>
        </TouchableOpacity>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
         marginHorizontal:30
    },
    imageInfo:{
        marginTop:10
    },
    imageText:{
        height:200,
        width:310,
        alignSelf:'center'
    },
    colText:{
        marginTop:80,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'brown',
        
    },
      InnText:{
        fontSize:16,
        color:'brown'
      },

    input2:{
        fontSize:12
    },
    culText:{
 
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'brown',
        
    },
    InText:{
        fontSize:16,
       color:'brown'
    },

    delText:{
        marginVertical:20,
        borderRadius:5,
        height:42,
        backgroundColor:'brown',
        justifyContent:'center',
        marginTop:50
    },

    del1Text:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:18
        
    },
    gotText:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-start',
       
    },
    ol1Text:{
        color:'gray',
        fontSize:16
    },
    ol2Text:{
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:'brown',
        color:'black'
    }
})