import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../core/theme';
import {AppButton, AppInput, AppText, SizedBox} from '../../../core/components';
import Flag from './Flag';

const SignIn = () => {
  const renderPhonePrefix = (value = '+84') => {
    return (
      <>
        <Text style={styles.phonePrefix}>{value}</Text>
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
        <Flag />
        <SizedBox size={20} />
        <AppInput
          placeholder={'Phone Number'}
          style={GStyles.flex1}
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
  phonePrefix: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {fontSize: 16, textAlign: 'center'},
});
