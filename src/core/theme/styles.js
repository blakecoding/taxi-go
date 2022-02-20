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
});

export default GStyles;
