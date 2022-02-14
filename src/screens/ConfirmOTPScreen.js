import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  AppButton,
  AppText,
  LinearGradientView,
  Screen,
  SizedBox,
} from '../components';
import {AppColors} from '../theme';
import {BackIcon} from '../assets';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const ConfirmOTPScreen = () => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  const onPressSubmit = () => {
    navigation.navigate('home');
  };

  return (
    <Screen>
      <AppHeader height={200}>
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              width: 32,
              height: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BackIcon />
          </TouchableOpacity>
          <SizedBox size={24} />
          <AppText style={{fontSize: 26, color: AppColors.white}} bold>
            Phone Verificaion
          </AppText>
          <SizedBox size={10} />
          <AppText style={{fontSize: 16, color: AppColors.white}}>
            Enter your OTP code here
          </AppText>
        </View>
      </AppHeader>
      <View style={{justifyContent: 'center', marginTop: 35}}>
        <AppText
          bold
          style={{
            textAlign: 'center',
            fontSize: 16,
          }}>
          Enter the 4 digit code we just sent to
        </AppText>
        <AppText
          bold
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: AppColors.deepPrimary,
          }}>
          +19685121212
        </AppText>
      </View>
      <View
        style={{
          marginHorizontal: 51,
        }}>
        <OTPInputView
          pinCount={4}
          style={{
            height: 100,
          }}
          codeInputFieldStyle={{
            width: 56,
            height: 51,
            borderRadius: 8,
            borderColor: AppColors.iconBorder,
            borderWidth: 1,
            fontSize: 22,
            color: AppColors.black,
          }}
          placeholderTextColor={AppColors.inputBorder}
          placeholderCharacter={'-'}
          onCodeFilled={onPressSubmit}
        />
        <AppButton onPress={onPressSubmit} label={'SIGN IN'} />
      </View>
    </Screen>
  );
};

export default ConfirmOTPScreen;

const styles = StyleSheet.create({});
