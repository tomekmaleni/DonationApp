import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Text style={style.title}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
