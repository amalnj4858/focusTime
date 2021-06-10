import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

export const FocusHistoryList = ({ history }) => {
  const RenderItem = ({ item }) => (
    <Text
      style={{
        color: item.status === 'complete' ? 'green' : 'red',
        fontSize: 22,
        margin: 5,
        textAlign: 'center',
      }}>
      {' '}
      {item.title}{' '}
    </Text>
  );
  return (
    <SafeAreaView style={style.list}>
      <Text style={{ color: 'white', fontWeight: 'bolder', fontSize: 25 }}>
        Tasks focussed on :
      </Text>
      <FlatList data={history} renderItem={RenderItem} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  list: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
