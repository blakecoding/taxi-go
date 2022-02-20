import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppText, LinearGradientView, Screen} from '../../../core/components';
import {AppColors, AppFonts, GStyles} from '../../../core/theme';
import {Logo} from '../../../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SignIn, SignUp} from '../components';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        // swipeEnabled: true,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 58,
          justifyContent: 'center',
        },
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: 'black',
        tabBarIndicatorStyle: {
          backgroundColor: AppColors.primary,
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: '500',
          textTransform: 'capitalize',
          fontFamily: 'Corbel-Bold',
        },
      }}>
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarLabel: 'Sign Up',
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarLabel: 'Sign In',
        }}
      />
    </Tab.Navigator>
  );
}

const AuthScreen = () => {
  const loginMethods = [
    {
      key: 1,
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsql4NBewWmDAG1GbjsA8rZ4T4mkTa6IFxgizZ_u1J_xJMniXJXPBXCRj6HGHn_orlmWU&usqp=CAU',
    },
    {
      key: 2,
      uri: 'https://banner2.cleanpng.com/20180324/sbe/kisspng-google-logo-g-suite-google-5ab6f1f0dbc9b7.1299911115219389289003.jpg',
    },
    {
      key: 3,
      uri: 'https://e7.pngegg.com/pngimages/102/834/png-clipart-logo-instagram-pinterest-facebook-inc-instagram-text-logo-thumbnail.png',
    },
    {
      key: 4,
      uri: 'https://static.thenounproject.com/png/1280936-200.png',
    },
  ];

  const renderSocialMethod = (item, index) => {
    return (
      <TouchableOpacity key={item.key} style={styles.buttonSocialMethod}>
        <Image
          source={{
            uri: item?.uri || '',
          }}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.formView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LinearGradientView style={styles.logoBackground}>
          <Logo height={100} />
        </LinearGradientView>
        <View style={[styles.formContainer, GStyles.boxShadow]}>
          <MyTabs />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footerView}>
        <SafeAreaView>
          <View style={styles.footerOptionView}>
            {loginMethods.map(item => renderSocialMethod(item))}
          </View>
          <AppText style={styles.footerText} bold>
            By signing in you agree to our{' '}
            <Text style={styles.underlineText}>Terms of use</Text>
          </AppText>
        </SafeAreaView>
      </View>
    </Screen>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  buttonSocialMethod: {
    width: 51,
    height: 51,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: AppColors.iconBorder,
    backgroundColor: AppColors.white,
  },
  formView: {
    flex: 1,
    bottom: 100,
    backgroundColor: AppColors.white,
  },
  logoBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  formContainer: {
    marginHorizontal: 20,
    backgroundColor: AppColors.white,
    marginTop: -58,
    borderRadius: 10,
    height: 300,
  },
  footerView: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerOptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 23,
    justifyContent: 'space-around',
    minWidth: 260,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});
