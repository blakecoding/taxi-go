import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppText = props => {
  return (
    <Text
      {...props}
      style={[
        {fontFamily: props.bold ? 'Corbel-Bold' : 'Corbel'},
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default AppText;
