import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Pressable, Text} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {Routes} from '../../navigation/Routes';

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <Header title={'Welcome Back'} />
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
          <Button title={'Login'} />
        </View>
        <View style={style.registerButton}>
          <Pressable
            style={style.registrationButton}
            //   onPress={navigation.navigate(Routes.Register)}
          >
            <Header
              title={"Don't have an account?"}
              type={3}
              color={'#156CF7'}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
