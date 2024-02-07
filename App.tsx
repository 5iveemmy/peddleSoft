/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Packages from './screens/Packages';
import HealthInsurance from './screens/healthInsurance/HealthInsurance';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://test2024.peddlesoftdev.xyz/graphql/',
  cache: new InMemoryCache(),
});

const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
