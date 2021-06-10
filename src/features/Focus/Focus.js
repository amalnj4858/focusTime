import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundButton } from '../../components/Button';

export const Focus = ({onSubmit}) => {
  const [item,setItem] = useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.text}> What would you like to focus on? </Text>
      <View style={styles.inputContainer}>
        <TextInput mode="outlined" style={styles.input} value = {item} onChangeText = {(text)=>setItem(text)} />
        <RoundButton title="+" size={60} onPress = {()=>onSubmit(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 0.5,
    marginLeft: 10,
    marginTop: 100
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#ffffff',
    margin: 1,
    width: 275,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
