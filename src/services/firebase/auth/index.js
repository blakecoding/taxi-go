//@flow
import auth from '@react-native-firebase/auth';

const signInWithPhoneNumber = phone => auth().signInWithPhoneNumber(phone);

const signOut = () => auth().signOut();

export {signInWithPhoneNumber, signOut};
