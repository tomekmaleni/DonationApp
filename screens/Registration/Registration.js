import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

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
        <View style={style.button}>
          <Button
            title={'Register'}
            onPress={async () => await createUser(fullName, email, password)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
