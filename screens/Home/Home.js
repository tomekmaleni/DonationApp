import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

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
          <Header title={'Azzari A.👋'} color={'#022150'} />
        </View>
        <Image
          width={horizontalScale(50)}
          source={require('../../assets/images/Robot-Head.png')}
        />
      </View>
      <View style={style.marginTop}>
        <Search
          onSearch={value => {
            console.log(value);
          }}
        />
      </View>
      <View style={[style.marginTop, style.donations]}>
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Enviroment'}
          donationTitle={'Tree Cactus Imitation'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Enviroment'}
          donationTitle={'Tree Cactus Imitation'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
