import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GStyles} from '../../../core/theme';
import {AppButton, AppInput, SizedBox} from '../../../core/components';
import {useNavigation} from '@react-navigation/native';
import Flag from './Flag';
import store from '../../../core/store';

const SignUp = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState('');
  const [callingCode, setCallingCode] = useState('1');

  const renderPhonePrefix =
    (value = '84') =>
    () => {
      return (
        <>
          <Text style={styles.phonePrefix}>+{value}</Text>
          <SizedBox size={20} />
        </>
      );
    };

  const onPressSubmit = async () => {
    const phoneNumber = `+${callingCode}${phone}`;
    const confirm = await store.dispatch.auth.authPhoneLogin(phoneNumber);
    if (confirm) {
      navigation.navigate('otp', {confirm, phone});
    }
  };

  return (
    <View style={[GStyles.container, styles.container]}>
      <AppInput
        placeholder={'name@example.com'}
        keyboardType={'email-address'}
      />
      <SizedBox size={15} />
      <View style={GStyles.flexRow}>
        <Flag setCode={setCallingCode} />
        <SizedBox size={20} />
        <AppInput
          style={GStyles.flex1}
          leadComponent={renderPhonePrefix(callingCode)}
          placeholder={'Phone Number'}
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
        />
      </View>
      <SizedBox size={27} />
      <AppButton onPress={onPressSubmit} label={'SIGN UP'} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  phonePrefix: {fontSize: 22, fontWeight: 'bold'},
});
