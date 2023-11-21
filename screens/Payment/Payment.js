import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {useSelector} from 'react-redux';

import {StripeProvider, CardForm} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISABLE_KEY} from '../../Constants/App';

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
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={STRIPE_PUBLISABLE_KEY}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Confirm Payment'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
