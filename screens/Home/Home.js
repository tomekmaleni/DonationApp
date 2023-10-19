import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzari A.'} type={1} />
      <Button title={'Donate'} />
    </SafeAreaView>
  );
};

export default Home;
