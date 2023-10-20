import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        style.paddingHorizontal,
      ]}>
      <View style={style.marginTop}>
        <Text>Hello,</Text>
        <Header title={'Azzari A.'} />
      </View>
      <View style={style.marginTop}>
        <Search
          onSearch={value => {
            console.log(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
