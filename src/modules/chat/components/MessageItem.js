import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {AppColors, GStyles} from '../../../core/theme';

export default function MessageItem(props) {
  const {data} = props;
  const messageItem = useRef(null);
  const convertDate = date => {
    return moment(date, 'YYYY/MM/DD HH:mm:ss ZZ')
      .utcOffset('+07:00')
      .format('DD/MM/YYYY');
  };

  const convertToDay = date => {
    const day = moment(date, 'YYYY/MM/DD HH:mm:ss ZZ').format('dddd');
    return `${day} ${moment(date, 'YYYY/MM/DD HH:mm:ss ZZ').format('HH:mm')}`;
  };
  const {user_id, message, sent_at} = data.currentMessage;
  const isMe = user_id === 1;
  const spaceMessage =
    data?.currentMessage?.user_id !== data?.nextMessage?.user_id;
  const day = convertDate(sent_at);
  const time = convertToDay(sent_at);
  const dayPrev = convertDate(data?.previousMessage?.sent_at);

  const messageViewStyle = {
    backgroundColor: isMe ? AppColors.primary : '#34495E',
    marginTop:
      data?.currentMessage?.user_id !== data?.previousMessage?.user_id ? 12 : 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    alignSelf: isMe ? 'flex-start' : 'flex-end',
    maxWidth: '70%',
    borderBottomRightRadius: isMe ? 16 : !spaceMessage ? 4 : 0,
    borderBottomLeftRadius: !isMe ? 16 : spaceMessage ? 0 : 4,
  };

  const triangleStyle = {
    borderBottomColor: isMe ? AppColors.primary : '#34495E',
    transform: [{rotate: isMe ? '230deg' : '130deg'}],
    marginTop: -14,
    marginLeft: isMe ? -4 : 0,
    marginRight: isMe ? 0 : -4,
    alignSelf: isMe ? 'flex-start' : 'flex-end',
  };

  const readTimeStyle = {
    textAlign: isMe ? 'left' : 'right',
    color: AppColors.inputBorder,
    fontSize: 11,
    marginVertical: 4,
  };

  return (
    <View>
      {dayPrev !== day && (
        <View style={styles.timeView}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => messageItem.current._onCollapse()}>
        <View style={messageViewStyle}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        {data?.currentMessage?.user_id !== data?.nextMessage?.user_id && (
          <View style={[styles.triangle, triangleStyle]} />
        )}
      </TouchableOpacity>
      <View style={GStyles.width_100}>
        <AnimatedLayout
          ref={messageItem}
          viewContent={<Text style={readTimeStyle}>Read {time}</Text>}
        />
      </View>
    </View>
  );
}

const AnimatedLayout = forwardRef(({viewContent, duration}, ref) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(0);
  const expandStateChildList = useRef(false);

  useImperativeHandle(ref, () => ({
    _onCollapse() {
      collapseLayout();
    },
  }));

  const collapseLayout = () => {
    if (expandStateChildList.current) {
      expandStateChildList.current = false;
      Animated.timing(animatedHeight, {
        duration,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      expandStateChildList.current = true;
      Animated.timing(animatedHeight, {
        duration,
        toValue: contentHeight.current,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.viewAnimation, {height: animatedHeight}]}>
      <View
        onLayout={event =>
          (contentHeight.current = event.nativeEvent.layout.height)
        }
        style={styles.viewContent}>
        {viewContent}
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
  },
  viewAnimation: {
    overflow: 'hidden',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 10,
    borderBottomWidth: 22,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  headerText: {
    fontSize: 26,
    color: AppColors.white,
  },
  messageText: {
    color: '#FFF',
    lineHeight: 20,
    fontSize: 13,
  },
  timeView: {alignSelf: 'center', marginTop: 12},
  timeText: {fontSize: 12, color: AppColors.inputBorder},
});
