import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LinearGradientView} from '.';

const {width} = Dimensions.get('window');

const AppHeader = props => {
  const {height, style} = props;
  return (
    <LinearGradientView style={[{height: height, width: width}, style]}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </LinearGradientView>
  );
};

export default AppHeader;
