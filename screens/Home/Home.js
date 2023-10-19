import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzari A.'} type={1} />
      <Tab title={'Highlight'} />
      <Tab title={'Lifestyle'} isInactive={true} />
      <Tab title={'Hobby'} isInactive={true} />
    </SafeAreaView>
  );
};

export default Home;
