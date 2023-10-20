import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzari A.'} type={1} />
      <Button title={'Donate'} />
      <Tab title={'Highlight'} />
      <Tab title={'Lifestyle'} isInactive={true} />
      <Badge title={'Enviroment'} />
    </SafeAreaView>
  );
};

export default Home;
