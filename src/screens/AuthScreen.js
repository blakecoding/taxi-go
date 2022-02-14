import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppText, LinearGradientView, Screen} from '../components';
import {AppColors, GStyles} from '../theme';
import {Logo} from '../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

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
      <KeyboardAvoidingView style={{flex: 8}} behavior={'padding'}>
        <LinearGradientView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo height={100} />
        </LinearGradientView>
        <View
          style={[
            {
              marginHorizontal: 20,
              backgroundColor: AppColors.white,
              marginTop: -58,
              borderRadius: 10,
              height: 300,
            },
            GStyles.boxShadow,
          ]}>
          <MyTabs />
        </View>
      </KeyboardAvoidingView>
      <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 16,
              justifyContent: 'space-around',
            }}>
            {loginMethods.map(item => renderSocialMethod(item))}
          </View>
          <AppText style={{textAlign: 'center', fontWeight: '500'}}>
            By signing in you agree to our{' '}
            <Text style={{textDecorationLine: 'underline'}}>Terms of use</Text>
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
  },
});
