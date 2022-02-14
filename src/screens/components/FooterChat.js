import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {AppText} from '../../components';
import {AppColors} from '../../theme';

export default function FooterChat(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.inputBorder,
        height: 40,
        paddingHorizontal: 12,
        alignItems: 'center',
        borderRadius: 32,
        marginVertical: 16,
        marginHorizontal: 16,
      }}>
      <TextInput placeholder="Aaa..." style={{flex: 1}} />
      <TouchableOpacity style={{marginLeft: 10}}>
        {/* icon or text */}
        <AppText>Sent</AppText>
      </TouchableOpacity>
    </View>
  );
}
