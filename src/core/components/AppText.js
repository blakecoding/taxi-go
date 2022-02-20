import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors, AppFonts} from '../theme';

const AppText = props => {
  const {bold, color} = props;
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: bold ? AppFonts.corbelBold : AppFonts.corbel,
          color: color || AppColors.black,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default AppText;
