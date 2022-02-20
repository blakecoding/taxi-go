import {StyleSheet} from 'react-native';
import AppColors from './colors';

const GStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  boxShadow: {
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  messageListView: {
    paddingHorizontal: 16,
    backgroundColor: AppColors.white,
  },
  width_100: {
    width: '100%',
  },
  triangle_down: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: AppColors.primary,
    transform: [{rotate: '180deg'}],
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default GStyles;
