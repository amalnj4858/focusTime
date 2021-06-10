import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundButton } from '../../components/Button';

export const Timing = ({ onButtonPress }) => {
  return (
    <View style={style.buttonsWrapper}>
      <RoundButton
        title="10"
        style={{ margin: 20, width: 80, height: 80 }}
        onPress={() => onButtonPress(10)}
      />
      <RoundButton
        title="15"
        style={{ margin: 20, width: 80, height: 80 }}
        onPress={()=>onButtonPress(15)}
      />
      <RoundButton
        title="20"
        style={{ margin: 20, width: 80, height: 80 }}
        onPress={()=>onButtonPress(20)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: 120,
  },
});
