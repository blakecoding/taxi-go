import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GStyles} from '../../../core/theme';
import {AppButton, AppInput, AppText, SizedBox} from '../../../core/components';
import Flag from './Flag';
import {useNavigation} from '@react-navigation/native';
import store from '../../../core/store';

const SignIn = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [callingCode, setCallingCode] = useState('1');
  const onSignInPress = async () => {
    const phoneNumber = `+${callingCode}${phone}`;
    const confirm = await store.dispatch.auth.authPhoneLogin(phoneNumber);
    if (confirm) {
      navigation.navigate('otp', {confirm, phone});
    }
  };

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

  return (
    <View style={[GStyles.container, styles.container]}>
      <AppText style={styles.label} bold>
        Login with your Phone Number
      </AppText>
      <SizedBox style={20} />
      <View style={GStyles.flexRow}>
        <Flag setCode={setCallingCode} />
        <SizedBox size={20} />
        <AppInput
          placeholder={'Phone Number'}
          style={GStyles.flex1}
          leadComponent={renderPhonePrefix(callingCode)}
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
        />
      </View>
      <SizedBox size={27} />
      <AppButton label="SIGN IN" onPress={onSignInPress} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  phonePrefix: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {fontSize: 16, textAlign: 'center'},
});
