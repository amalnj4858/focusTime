import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Vibration,Platform } from 'react-native';

export const CountDown = ({ minutes, paused, setProgress, onEnd }) => {
  const convertMinutesToMilli = (minutes) => minutes * 60 * 1000;
  const [time, setTime] = useState(convertMinutesToMilli(minutes));
  const interval = useRef(null);

  useEffect(()=>{
    setTime(convertMinutesToMilli(minutes))
  },[minutes])

  useEffect(() => {
    if (paused) {
      return;
    }
    interval.current = setInterval(ReduceTime, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [paused,minutes]);

  const ReduceTime = () => {
    setTime((time) => {
      if (time === 0){
       if(Platform.OS === 'ios'){
         Vibration.vibrate()
       }
       else{
         Vibration.vibrate([0,400,200,400,200,400,200,400])
       }
       onEnd(null)
       return time;
       }
      else {
        setProgress(time / convertMinutesToMilli(minutes));
        time = time - 1000;
      }
      return time;
    });
  };

  const formatTime = (time) => {
    if (time <= 9) return `0${time}`;
    else return time;
  };

  return (
    <View style={style.container}>
      <Text style={style.textContainer}>
        {formatTime(Math.floor(time / (1000 * 60)))} : {formatTime((time / 1000) % 60)}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding : 65
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 60,
    width : 200,
    height : 90
  },
});
