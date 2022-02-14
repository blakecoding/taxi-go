import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../theme';
import {AppButton, AppInput, SizedBox} from '../../components';
import Flag from './Flag';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const renderPhonePrefix = (value = '+84') => {
    return (
      <>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{value}</Text>
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
      <View style={{flexDirection: 'row'}}>
        <Flag />
        <SizedBox size={20} />
        <AppInput
          style={{flex: 1}}
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
  },
});
