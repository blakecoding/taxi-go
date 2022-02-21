import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GStyles} from '../../../core/theme';
import {AppButton, AppInput, SizedBox} from '../../../core/components';
import {useNavigation} from '@react-navigation/native';
import Flag from './Flag';
import {useDispatch} from 'react-redux';

const SignUp = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');

  const renderPhonePrefix = (value = '+84') => {
    return (
      <>
        <Text style={styles.phonePrefix}>{value}</Text>
        <SizedBox size={20} />
      </>
    );
  };

  const onPressSubmit = async () => {
    const confirm = await dispatch.auth.authPhoneLogin(phone);
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
        <Flag />
        <SizedBox size={20} />
        <AppInput
          style={GStyles.flex1}
          leadComponent={renderPhonePrefix}
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
