import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppText, Screen, SizedBox} from '../components';
import AppHeader from '../components/AppHeader';
import MessageList from './components/MessageList';
import FooterChat from './components/FooterChat';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BackIcon, PhoneIcon} from '../assets';
import {AppColors} from '../theme';

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {avaUri, name} = route?.params?.item;

  const onBackPress = () => {
    navigation.goBack();
  };

  const messages = [
    {
      id: 1,
      user_id: 1,
      avatar: '',
      message: 'Hello World!',
      image: null,
      sent_at: '2022-02-08T11:23:10+07:00',
    },
    {
      id: 2,
      user_id: 2,
      avatar: '',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: null,
      sent_at: '2022-02-09T16:50:38+07:00',
    },
    {
      id: 3,
      user_id: 1,
      avatar: '',
      message: 'Contrary to popular belief, ',
      image: null,
      sent_at: '2022-02-10T09:24:10+07:00',
    },
    {
      id: 4,
      user_id: 1,
      avatar: '',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      image: null,
      sent_at: '2022-02-10T09:24:20+07:00',
    },
    {
      id: 5,
      user_id: 1,
      avatar: '',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text.',
      image: null,
      sent_at: '2022-02-10T09:24:38+07:00',
    },
    {
      id: 6,
      user_id: 2,
      avatar: '',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      image: null,
      sent_at: '2022-02-10T09:25:38+07:00',
    },
    {
      id: 7,
      user_id: 2,
      avatar: '',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. ...',
      image: null,
      sent_at: '2022-02-10T09:28:38+07:00',
    },
  ];

  return (
    <Screen>
      <AppHeader height={171}>
        <View
          style={{
            marginHorizontal: 22,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={onBackPress}
              style={{
                width: 32,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BackIcon />
            </TouchableOpacity>
            <SizedBox size={25} />
            <AppText style={{fontSize: 26, color: AppColors.white}} bold>
              {name}
            </AppText>
          </View>
          <View
            style={{
              borderRadius: 50,
              width: 60,
              height: 60,
              padding: 2,
              backgroundColor: AppColors.white,
            }}>
            <Image
              source={{uri: avaUri}}
              style={{
                borderRadius: 50,
                width: 56,
                height: 56,
                backgroundColor: AppColors.white,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: -20,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 41,
                  height: 41,
                  backgroundColor: AppColors.white,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <PhoneIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AppHeader>
      {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}> */}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <MessageList data={messages} />
        <FooterChat />
      </View>
      {/* </KeyboardAvoidingView> */}
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
