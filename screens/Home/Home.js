import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);

  const dispatch = useDispatch();
  // dispatch(resetToInitialState());

  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        style.paddingHorizontal,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.marginTop, style.header]}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <Header
              title={user.firstName + ' ' + user.lastName[0] + '.👋'}
              color={'#022150'}
            />
          </View>
          <Image
            style={style.profileImage}
            source={{uri: user.profileImage}}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.marginTop}>
          <Search
            onSearch={value => {
              // console.log(value);
            }}
          />
        </View>
        <Pressable style={style.marginTop}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
