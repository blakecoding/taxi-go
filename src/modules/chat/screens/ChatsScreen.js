import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
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
import store from '../../../core/store';

const ChatsScreen = () => {
  const navigation = useNavigation();

  const onBackPress = async () => {
    const res = await store.dispatch.auth.signOut();
    console.log('#res', res);
    navigation.navigate('auth');
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
          source={{uri: item?.avaUri || ''}}
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

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <Screen>
      <AppHeader style={styles.headerView}>
        <View style={styles.headerName}>
          <Text style={styles.headerText}>CONTACTS</Text>
          <View style={styles.backBtnView}>
            <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
              <BackIcon />
            </TouchableOpacity>
          </View>
        </View>
        <SizedBox size={20} />
        <AppInput
          style={styles.searchInput}
          placeholder={'Search'}
          leadComponent={() => <MagnifyingIcon width={14} height={14} />}
        />
      </AppHeader>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </Screen>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  headerView: {
    padding: 20,
  },
  headerName: {
    height: 32,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: AppColors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
    // width: width * 0.7,
  },
  backBtnView: {
    position: 'absolute',
    left: 0,
    height: 32,
    width: 32,
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 36,
    backgroundColor: AppColors.white,
  },
  listContainer: {
    marginHorizontal: 10,
    paddingVertical: 24,
  },
  separator: {
    height: 1,
    backgroundColor: AppColors.inputBorder,
    marginVertical: 15,
  },
});
