/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Packages from './screens/Packages';
import HealthInsurance from './screens/HealthInsurance';

const Stack = createStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Packages">
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="HealthInsurance" component={HealthInsurance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
