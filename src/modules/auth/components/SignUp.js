import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../core/theme';
import {AppButton, AppInput, SizedBox} from '../../../core/components';
import {useNavigation} from '@react-navigation/native';
import Flag from './Flag';

const SignUp = () => {
  const navigation = useNavigation();
  const renderPhonePrefix = (value = '+84') => {
    return (
      <>
        <Text style={styles.phonePrefix}>{value}</Text>
        <SizedBox size={20} />
      </>
    );
  };

  const onPressSubmit = () => {
    navigation.navigate('otp');
  };

  return (
    <View style={[GStyles.container, styles.container]}>
      <AppInput placeholder={'name@example.com'} />
      <SizedBox size={15} />
      <View style={GStyles.flexRow}>
        <Flag />
        <SizedBox size={20} />
        <AppInput
          style={GStyles.flex1}
          leadComponent={renderPhonePrefix}
          placeholder={'Phone Number'}
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
