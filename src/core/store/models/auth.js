import {Alert} from 'react-native';
import {signInWithPhoneNumber, signOut} from '../../../services/firebase/auth';

export const auth = {
  state: {
    user: null,
    uid: null,
    confirm: null, // use for OTP step
  },
  reducers: {
    // handle state changes with pure functions
    SET_USER(state, {user, uid}) {
      return {...state, user, uid};
    },
    CLEAR_USER() {
      return {
        user: null,
        uid: null,
      };
    },
  },
  effects: dispatch => ({
    async authPhoneLogin(phone, rootState) {
      try {
        const confirm = await signInWithPhoneNumber(phone);
        return confirm;
      } catch (error) {
        console.log('#err', error);
        Alert.alert('Error', error.code);
      }
    },
    async signOut() {
      try {
        await signOut();
        dispatch.auth.CLEAR_USER();
        return;
      } catch (error) {
        console.log('#signOut');
      }
    },
  }),
};
