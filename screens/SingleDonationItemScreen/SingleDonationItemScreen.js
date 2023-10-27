import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {useSelector} from 'react-redux';

const SingleDonationItemScreen = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categories = useSelector(state => state.categories);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[style.section, style.goBack]}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Image
          style={[style.section, style.image]}
          source={{uri: donationItemInformation.image}}
        />
        <View style={[style.section, style.badge]}>
          <Badge
            title={
              categories.categories.filter(
                value => value.categoryId === categories.selectedCategoryId,
              )[0].name
            }
          />
        </View>
        <View style={[style.section, style.textContainer]}>
          <Header title={donationItemInformation.name} />
          <Text style={style.text}>{donationItemInformation.description}</Text>
        </View>
        <View style={style.section}>
          <Button title={'Donate'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
