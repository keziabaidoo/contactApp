import React from 'react';
import {NavigationContainer } from   '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/Screen/WelcomeScreen'
import WelcomeDetailedScreen from './src/Screen/WelcomeDetailedScreen';
import RegisterScreen from './src/Screen/RegisterScreen'
import LoginScreen from './src/Screen/LoginScreen';
   

const Stack = createStackNavigator()

export default function App() {
  return (
  

    <NavigationContainer>
 
     <Stack.Navigator >

      <Stack.Screen 
         options={{
          title:'Welcome',
          headerTitleAlign:'center',
        
          

         }}
      
      name='WelcomeScreen' component={WelcomeScreen}/>

      <Stack.Screen 
         options={{
            title:'Welcome People',
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'brown'
            }

         }}
      
      name='WelcomeDetailed' component={WelcomeDetailedScreen}/>
      <Stack.Screen 
           options={{
             title:'Register',
            headerTitleAlign:'center',
             headerStyle:{
               backgroundColor:'brown'
             }
           }}
      name='RegisterScreen' component={RegisterScreen}/>

      <Stack.Screen 
         options={{
          title:'Login',
          headerTitleAlign:'center',
           headerStyle:{
             backgroundColor:'brown'
           }
         }}
      
      name='LoginScreen' component={LoginScreen}/>
    
      </Stack.Navigator>
    </NavigationContainer>

  );        
}


    
  
  
