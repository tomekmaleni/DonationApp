import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <Header title={'Hello and Welcome !'} />
        <View style={style.input}>
          <Input
            label={'First & Last Name'}
            placeholder={'John Smith'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={style.input}>
          <Input
            label={'Email'}
            placeholder={'example@email.com'}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={style.input}>
          <Input
            label={'Password'}
            placeholder={'******'}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={style.button}>
          <Button
            title={'Register'}
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length < 8
            }
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setSuccess('');
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered.');
                setTimeout(() => {
                  navigation.goBack();
                }, 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
