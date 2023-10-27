import React from 'react';
import {Routes} from './Routes';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import SingleDonationItemScreen from '../screens/SingleDonationItemScreen/SingleDonationItemScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItemScreen}
        component={SingleDonationItemScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
