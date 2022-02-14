import {View, Text} from 'react-native';
import React from 'react';

export default function SizedBox(props) {
  const {size = 10} = props;
  return <View style={{width: size, height: size}} />;
}
