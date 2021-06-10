import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Vibration,
  Platform,
} from 'react-native';
import { CountDown } from '../../components/CountDown';
import { RoundButton } from '../../components/Button';
import { ProgressBar, Colors } from 'react-native-paper';
import { Timing } from './Timing';

export const Timer = ({ focusItem, resetFocus, addFocusHistory,currentHistory }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onButtonPress = (min) => {
    setMinutes(min);
    setCurrentProgress(1);
  };

  const onCountFinish = ()=>{
    addFocusHistory([...currentHistory,{title :focusItem,status : 'complete'}]);
    resetFocus();
  }

  return (
    <View style={styles.container}>
      <CountDown
        minutes={minutes}
        paused={isPaused}
        setProgress={setCurrentProgress}
        onEnd={onCountFinish}
      />
      <View style={styles.textContainer}>
        <Text
          style={{ fontSize: 20, marginTop: 50, height: 25, color: 'white' }}>
          {' '}
          Now focussing on:{' '}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            height: 25,
            color: 'white',
          }}>
          {' '}
          {focusItem}{' '}
        </Text>
      </View>
      <ProgressBar
        progress={currentProgress}
        color="#5E84E2"
        style={{
          height: 10,
          width: Dimensions.get('window').width,
          marginTop: 40,
          marginBottom: 40,
        }}
      />
      <Timing onButtonPress={onButtonPress} />
      <View style={{ marginTop: 130 }}>
        {isPaused ? (
          <RoundButton
            title="start"
            onPress={() => setIsPaused(false)}
            style={styles.button}
          />
        ) : (
          <RoundButton
            title="pause"
            onPress={() => setIsPaused(true)}
            style={styles.button}
          />
        )}
      </View>
      <RoundButton
        title="Clear"
        style={{
          height: 80,
          width: 80,
          alignSelf: 'flex-start',
          justifySelf: 'flex-end',
          marginTop : 150,
          marginLeft : 30
        }}
        onPress = {()=>{
          addFocusHistory([...currentHistory,{title :focusItem,status : 'incomplete'}])
          resetFocus();
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 450,
  },
  textContainer: {
    flex: 0.3,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  button: {
    fontSize: 30,
    height: 130,
    width: 130,
    borderColor: 'white',
    borderRadius: 200,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
