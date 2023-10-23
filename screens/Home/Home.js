import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

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
      <View style={[style.marginTop, style.header]}>
        <View>
          <Text>Hello,</Text>
          <Header title={'Azzari A.👋'} />
        </View>
        <Image source={require('../../assets/images/Robot-Head.png')} />
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
