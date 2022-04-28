import React, {useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  AppButton,
  AppHeader,
  AppText,
  Screen,
  SizedBox,
} from '../../../core/components';
import {AppColors} from '../../../core/theme';
import {BackIcon} from '../../../assets';
import store from '../../../core/store';

const ConfirmOTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const confirm = route?.params?.confirm;
  const phone = route?.params?.phone || 'Phone Number';

  const [loading, setLoading] = useState(false);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onPressSubmit = async code => {
    setLoading(true);
    try {
      if (confirm) {
        const userCredential = await confirm.confirm(code);
        if (userCredential) {
          const {user} = userCredential;
          store.dispatch.auth.SET_USER({user, uid: user.uid});
          navigation.navigate('chats');
        } else {
          throw new Error('Cannot get user');
        }
      }
    } catch (error) {
      console.log('# ConfirmOTPScreen,', error);
      Alert.alert('Alert', error.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen loading={loading}>
      <AppHeader style={styles.headerView}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <SizedBox size={24} />
        <AppText style={styles.headerNameText} bold>
          Phone Verificaion
        </AppText>
        <SizedBox size={10} />
        <AppText style={styles.headerNameDescription}>
          Enter your OTP code here
        </AppText>
      </AppHeader>
      <View style={styles.bodyView}>
        <AppText bold style={styles.bodyText}>
          Enter the 4 digit code we just sent to
        </AppText>
        <AppText bold style={styles.phoneText}>
          {phone}
        </AppText>
        <OTPInputView
          pinCount={6}
          style={styles.otpInputView}
          codeInputFieldStyle={styles.otpCodeInputFieldStyle}
          placeholderTextColor={AppColors.inputBorder}
          placeholderCharacter={'-'}
          onCodeFilled={onPressSubmit}
        />
        <AppButton
          style={styles.signInBtn}
          onPress={onPressSubmit}
          label={'SIGN IN'}
        />
      </View>
    </Screen>
  );
};

export default ConfirmOTPScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 35,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNameText: {fontSize: 26, color: AppColors.white},
  headerNameDescription: {fontSize: 16, color: AppColors.white},
  bodyView: {justifyContent: 'flex-start', marginTop: 35, flex: 1},
  bodyText: {
    textAlign: 'center',
    fontSize: 16,
  },
  phoneText: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.deepPrimary,
  },
  otpInputView: {
    height: 100,
    marginHorizontal: 12,
  },
  otpCodeInputFieldStyle: {
    width: 56,
    height: 51,
    borderRadius: 8,
    borderColor: AppColors.iconBorder,
    borderWidth: 1,
    fontSize: 22,
    color: AppColors.black,
  },
  signInBtn: {marginHorizontal: 51},
});
