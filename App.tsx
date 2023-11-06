import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <StatusBar backgroundColor={'#2979F2'} barStyle={'light-content'} />
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
