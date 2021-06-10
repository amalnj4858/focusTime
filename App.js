import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Focus } from './src/features/Focus/Focus';
import { Timer } from './src/features/Timer/Timer';
import { FocusHistoryList } from './src/features/Focus/FocusHistoryList';
import { RoundButton } from './src/components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [focus, setFocus] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const storeData = async (list) => {
  try {
    const history = JSON.stringify(list)
    await AsyncStorage.setItem('focusHistory', history)
  } catch (e) {
    console.log(e.message)
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('focusHistory');
    let list = JSON.parse(value);
    if(value && list.length>0) {
      setFocusHistory(list)
    }
  } catch(e) {
    console.log(e.message)
  }
}

  useEffect(()=>{
    getData();
 },[])

 
  useEffect(()=>{
    storeData(focusHistory)
  },[focusHistory])

  return (
    <View style={styles.container}>
      {focus ? (
        <View>
          <Timer
            focusItem={focus}
            resetFocus={setFocus}
            addFocusHistory={setFocusHistory}
            currentHistory={focusHistory}
          />
        </View>
      ) : (
        <>
          <Focus onSubmit={setFocus} />
          {focusHistory.length ? (
            <View style = {{flex : 1,alignItems : 'center',justifyContent : 'center'}}>
              <FocusHistoryList history={focusHistory} />
              <RoundButton
                title="Clear"
                style={{
                  height: 80,
                  width: 80,
                }}
                onPress={() => {
                  setFocusHistory([]);
                }}
              />
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    color: 'white',
  },
});
