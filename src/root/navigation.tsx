import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from '../components/onboarding/login';
import Signup from '../components/onboarding/signup';

// all components import, 

const Stack = createStackNavigator();


const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={App} options={{headerShown: false}}/>
        <Stack.Screen name='signup' component={Signup} options={{headerShown: false}}/>

   
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;