import React from 'react';
import {NavigationContainer } from   '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/Screen/WelcomeScreen'
import WelcomeDetailedScreen from './src/Screen/WelcomeDetailedScreen';
import RegisterScreen from './src/Screen/RegisterScreen'
import LoginScreen from './src/Screen/LoginScreen';
import ContactInfo from './src/Screen/ContactInfo';
import QRCode from 'react-native-qrcode-svg';
import MemberProfileScreen from './src/Screen/MemberProfileScreen';
import MyProfileScreen from './src/Screen/MyProfileScreen'
import { color } from 'react-native-reanimated';
   


const Stack = createStackNavigator()

export default function App() {
  return (
  
    <NavigationContainer>
 
    <Stack.Navigator >

     <Stack.Screen 
        options={{
       headerTitle:null,
       headerStyle:{height:0}
       
         

        }}
     
     name='WelcomeScreen' component={WelcomeScreen}/>

     <Stack.Screen 
        options={{
          headerTitle:null,
           headerStyle:{
             backgroundColor:'white',
             height:60
           }

        }}
     
     name='WelcomeDetailed' component={WelcomeDetailedScreen}/>
     <Stack.Screen 
          options={{
            title:'Register',
           headerTitleAlign:'center',
           headerTintColor:'brown'
          }}
     name='RegisterScreen' component={RegisterScreen}/>

     <Stack.Screen 
        options={{
         title:'Login',
         headerTitleAlign:'center',
            headerTintColor:'brown'
        
        }}
     
     name='LoginScreen' component={LoginScreen}/>

     <Stack.Screen 
     options={{
        headerTitle:null
     }}
     name='ContactInfo' component={ContactInfo}/>
     <Stack.Screen 
        options={{
          headerTitle:'MemberProfileScreen',
          headerTitleAlign:'center',
          headerTintColor:'brown'
        }}
     
     name='MemberProfileScreen' component={MemberProfileScreen}/>
     <Stack.Screen
         options={{
          headerTitle:'MyProfile',
          headerTitleAlign:'center',
          headerTintColor:'brown'
          }
        }
     
     name='MyProfileScreen' component={MyProfileScreen}/>
   
     </Stack.Navigator>
   </NavigationContainer>

 );        


}

    


  
    
  
  
  
