import React from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {AppInput, AppText} from '../../../core/components';
import {AppColors} from '../../../core/theme';

export default function FooterChat(props) {
  const renderSentAction = () => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <AppText color={AppColors.deepPrimary}>Sent</AppText>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <AppInput
        placeholder="Input..."
        style={styles.appInput}
        actionsComponent={renderSentAction}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appInput: {
    borderWidth: 1,
    // borderColor: AppColors.inputBorder,
    height: 40,
    borderRadius: 32,
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
});
