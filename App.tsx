import React, {useRef, useEffect} from 'react';
import {AppState} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // coming from background to foreground
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
  }, []);
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
