import React from 'react';
import {SafeAreaView, View, Pressable, Image, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

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
      <View>
        <Pressable
          style={[style.section, style.goBack]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Go back</Text>
        </Pressable>
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
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
