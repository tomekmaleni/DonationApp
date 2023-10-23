import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#2979F2'} barStyle={'light-content'} />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
