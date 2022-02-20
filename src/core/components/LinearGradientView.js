import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientView = props => {
  const {style} = props;

  return (
    <LinearGradient
      colors={['#109F2E', '#51C569']}
      start={{x: 0.0, y: 0.25}}
      end={{x: 1.0, y: 1.0}}
      style={[styles.linearGradient, style]}>
      <View style={style}>{props.children}</View>
    </LinearGradient>
  );
};

export default LinearGradientView;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
});
