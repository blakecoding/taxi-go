import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SizedBox} from '../../../core/components';
import {Dropdown, flagImage} from '../../../assets';
import {AppColors, GStyles} from '../../../core/theme';
import CountryPicker from '../../../core/components/CountryPicker';

const Flag = ({setCode}) => {
  return (
    <View style={styles.flexView}>
      <CountryPicker setCode={setCode} />
      <SizedBox size={8} />
      <View style={GStyles.triangle_down} />
    </View>
  );
};

export default Flag;

const styles = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: AppColors.inputBorder,
  },
});
