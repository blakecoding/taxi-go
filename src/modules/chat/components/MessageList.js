import React from 'react';
import {FlatList} from 'react-native';
import MessageItem from './MessageItem';

export default function MessageList(props) {
  const {data} = props;
  const keyExtractor = item => String(item.id);

  const convertMessage = (item, index) => {
    const newItem = {};
    newItem.currentMessage = item;

    if (index > 0) {
      newItem.previousMessage = data[index - 1];
    } else {
      newItem.previousMessage = {};
    }

    if (index + 1 <= data.length - 1) {
      newItem.nextMessage = data[index + 1];
    } else {
      newItem.nextMessage = {};
    }

    return newItem;
  };

  const renderItem = ({item, index}) => {
    const messageConvert = convertMessage(item, index);
    return <MessageItem data={messageConvert} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 16, backgroundColor: 'white'}}
    />
  );
}
