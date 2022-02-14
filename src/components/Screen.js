import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {AppColors} from '../theme';

const Screen = props => {
  const {screenStyle} = props;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props} style={[styles.container, screenStyle]}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.white},
});
