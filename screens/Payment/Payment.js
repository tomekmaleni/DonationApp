import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {useSelector} from 'react-redux';

const Payment = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Header title={'My Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price}
        </Text>
        <Header title={'My Card Payment'} />
        <View style={style.input}>
          <Input
            label={'Card Holder Name'}
            placeholder={'John Smith'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={style.input}>
          <Input
            label={'Card Number'}
            placeholder={'e.g 2524 1950 5100'}
            keyboardType={'numeric'}
            textContentType={'creditCardNumber'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
          }}>
          <View style={style.input}>
            <Input
              label={'Expired Date'}
              placeholder={'ex. 06/24'}
              keyboardType={'numeric'}
              onChangeText={value => setExpiredDate(value)}
            />
          </View>
          <View style={style.input}>
            <Input
              label={'CVV'}
              placeholder={'ex. 599'}
              keyboardType={'numeric'}
              onChangeText={value => setCvvNumber(value)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Confirm Payment'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
