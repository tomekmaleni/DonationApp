import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {useSelector} from 'react-redux';

const SingleDonationItemScreen = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          style={[style.section, style.image]}
          source={{uri: donationItemInformation.image}}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
