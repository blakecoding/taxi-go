import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors, GStyles} from '../theme';
import {PhoneIcon} from '../../assets';

const AppAvatar = props => {
  const {avaUri} = props;
  return (
    <View
      style={[
        GStyles.boxShadow,
        {
          borderRadius: 50,
          width: 60,
          height: 60,
          padding: 2,
          backgroundColor: AppColors.white,
          shadowColor: AppColors.black,
          shadowOpacity: 0.5,
          shadowRadius: 3.5,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      ]}>
      <Image
        source={{uri: avaUri}}
        style={{
          borderRadius: 50,
          width: 56,
          height: 56,
          backgroundColor: AppColors.white,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: -20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            width: 41,
            height: 41,
            backgroundColor: AppColors.white,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <PhoneIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({});
