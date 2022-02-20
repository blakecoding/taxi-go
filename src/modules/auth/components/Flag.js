import {View, Text, Image} from 'react-native';
import React from 'react';
import {SizedBox} from '../../../core/components';
import {Dropdown, flagImage} from '../../../assets';
import {AppColors} from '../../../core/theme';

const Flag = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: AppColors.inputBorder,
      }}>
      <Image source={flagImage} />
      <SizedBox size={8} />
      <Dropdown width={12} height={15} />
    </View>
  );
};

export default Flag;
