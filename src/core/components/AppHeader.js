import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LinearGradientView} from '.';

const {width} = Dimensions.get('window');

const AppHeader = props => {
  const {height} = props;
  return (
    <View style={{height: height, width: width}}>
      <LinearGradientView style={{flex: 1}}>
        <SafeAreaView>{props.children}</SafeAreaView>
      </LinearGradientView>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
