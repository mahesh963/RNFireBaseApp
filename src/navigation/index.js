import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Splash from '../containers/Splash';
import Login from '../containers/Login';
import Home from '../containers/Home';
import CreateData from '../containers/CreateData';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateData" component={CreateData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
