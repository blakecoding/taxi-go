import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColors} from '../theme';

const AppInput = props => {
  const {
    placeholder = 'Input Placeholder',
    leadComponent,
    style,
    actionsComponent,
    value,
  } = props;

  const textInputStyle = {
    fontFamily: value ? undefined : 'Corbel-Bold',
  };

  return (
    <View style={[styles.container, style]}>
      {!!leadComponent && leadComponent()}
      <TextInput
        {...props}
        style={[styles.textInput, textInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.inputBorder}
      />
      {!!actionsComponent && actionsComponent()}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: AppColors.inputBorder,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  textInput: {
    flex: 1,
  },
});
