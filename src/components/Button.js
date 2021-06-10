import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity
} from 'react-native';

export const RoundButton = ({title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyles,style]} onPress = {onPress} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonStyles: {
      color: 'white',
      borderWidth: 2,
      height: 50,
      width: 50,
      padding: 5,
      borderColor: '#fff',
      borderRadius: 50 * 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: 'bolder',
      fontSize: 50 / 2,
    },
  });
