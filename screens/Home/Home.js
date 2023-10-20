import React from 'react';
import {SafeAreaView} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
