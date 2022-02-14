import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../theme';
import {AppButton, AppInput, AppText, SizedBox} from '../../components';
import Flag from './Flag';

const SignIn = () => {
  const renderPhonePrefix = (value = '+84') => {
    return (
      <>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{value}</Text>
        <SizedBox size={20} />
      </>
    );
  };
  return (
    <View style={[GStyles.container, styles.container]}>
      <AppText style={{fontSize: 16, textAlign: 'center'}} bold>
        Login with your Phone Number
      </AppText>
      <SizedBox style={20} />
      <View style={{flexDirection: 'row'}}>
        <Flag />
        <SizedBox size={20} />
        <AppInput
          placeholder={'Phone Number'}
          style={{flex: 1}}
          leadComponent={renderPhonePrefix}
        />
      </View>
      <SizedBox size={27} />
      <AppButton label="SIGN IN" />
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
});
