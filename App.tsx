import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#2979F2'} barStyle={'light-content'} />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
