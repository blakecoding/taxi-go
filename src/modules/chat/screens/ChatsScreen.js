import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppHeader, AppInput, Screen, SizedBox} from '../../../core/components';
import {AppColors} from '../../../core/theme';
import {BackIcon, MagnifyingIcon} from '../../../assets';

const {height, width} = Dimensions.get('window');

const ChatsScreen = () => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  const DATA = [
    {
      avaUri:
        'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg',
      name: 'Adrianne',
      status: 'Now',
    },
    {
      avaUri:
        'https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg',
      name: 'Ivone',
      status: '12:15',
    },
    {
      avaUri:
        'https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:235609?quality=0.8&format=jpg&width=1440&height=810&.jpg',
      name: 'Eve',
      status: '12:15',
    },
    {
      avaUri:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&w=1000&q=80',
      name: 'Lisa',
      status: null,
    },
  ];

  const onItemPress = item => () => {
    navigation.navigate('chat', {item});
  };

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={onItemPress(item)}>
        <Image
          source={{url: item?.avaUri || ''}}
          style={{width: 60, height: 60, borderRadius: 50}}
        />
        <SizedBox size={15} />
        <Text style={{flex: 1, fontSize: 14, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 13, color: AppColors.primary}}>
          {item.status}
        </Text>
      </Pressable>
    );
  };

  return (
    <Screen>
      <AppHeader height={155}>
        <SizedBox size={10} />
        <View
          style={{marginHorizontal: 20, height: 32, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              color: AppColors.white,
              fontWeight: 'bold',
              textAlign: 'center',
              // width: width * 0.7,
            }}>
            CONTACTS
          </Text>
          <View
            style={{
              position: 'absolute',
              left: 0,
              height: 32,
              width: 32,
            }}>
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
          </View>
        </View>
        <SizedBox size={20} />
        <AppInput
          style={{
            height: 36,
            backgroundColor: AppColors.white,
            marginHorizontal: 20,
          }}
          placeholder={'Search'}
          leadComponent={() => <MagnifyingIcon width={14} height={14} />}
        />
      </AppHeader>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{marginHorizontal: 10}}
          data={DATA}
          renderItem={renderItem}
          ListHeaderComponent={() => <SizedBox size={24} />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: AppColors.inputBorder,
                marginVertical: 15,
              }}
            />
          )}
        />
      </SafeAreaView>
    </Screen>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
