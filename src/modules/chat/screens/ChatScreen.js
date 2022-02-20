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
import {AppAvatar, AppText, Screen, SizedBox} from '../../../core/components';
import AppHeader from '../../../core/components/AppHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BackIcon, PhoneIcon} from '../../../assets';
import {AppColors, GStyles} from '../../../core/theme';
import {FooterChat, MessageList} from '../components';

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
      <AppHeader>
        <View style={styles.headerView}>
          <View style={GStyles.flexCol}>
            <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
              <BackIcon />
            </TouchableOpacity>
            <SizedBox size={25} />
            <AppText style={styles.headerText} bold>
              {name}
            </AppText>
          </View>
          <AppAvatar avaUri={avaUri} />
        </View>
      </AppHeader>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.body}>
        <MessageList data={messages} />
        <FooterChat />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 35,
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {fontSize: 26, color: AppColors.white},
  body: {flex: 1, backgroundColor: 'white'},
});
