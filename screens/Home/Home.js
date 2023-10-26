import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import Tab from '../../components/Tab/Tab';

import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);

  const dispatch = useDispatch();
  // dispatch(resetToInitialState());

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.section, style.header]}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
          </View>
          <Image
            style={style.profileImage}
            source={{uri: user.profileImage}}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.section}>
          <Search
            onSearch={value => {
              // console.log(value);
            }}
          />
        </View>
        <Pressable style={style.section}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.section}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={[style.section, style.categories]}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        <View style={[style.section, style.donations]}>
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
