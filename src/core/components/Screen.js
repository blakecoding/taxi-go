import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {AppColors} from '../theme';
import AppText from '../components/AppText';

const Screen = props => {
  const {loading: screenLoading} = props;
  const loading = useSelector(state => state.loading.global);

  const {screenStyle} = props;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props} style={[styles.container, screenStyle]}>
        <Modal visible={loading || !!screenLoading} transparent={true}>
          <View style={styles.loadingView} animated={false}>
            <AppText style={styles.loadingText} bold>
              Loading...
            </AppText>
          </View>
        </Modal>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  loadingView: {
    flex: 1,
    backgroundColor: '#0000004D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: AppColors.white,
    fontSize: 28,
  },
});
