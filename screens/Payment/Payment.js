import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {useSelector} from 'react-redux';

import {
  StripeProvider,
  CardForm,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISABLE_KEY} from '../../Constants/App';

const Payment = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const [isReady, setIsReady] = useState(false);
  const {confirmPayment, loading} = useConfirmPayment();
  const user = useSelector(state => state.user);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch('http://10.0.2.2:3000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        currency: 'usd',
        amount: donationItemInformation.price * 100,
      }),
    });
    const {clientSecret} = await response.json();
    return clientSecret;
  };
  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occured with your payment',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Succesful', 'The payment was confirmed succesfully!');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={style.backButton}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={style.header}>
          <Header title={'Making Donation'} />
        </View>
        <Text style={style.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={STRIPE_PUBLISABLE_KEY}>
            <CardForm
              style={style.cardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Confirm Payment'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
