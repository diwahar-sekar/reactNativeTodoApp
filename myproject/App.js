import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';


export default function App() {
  
  const[person,setPerson] = useState({name : 'hunt', gender:'N/A'});

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput multiline 
      placeholder="eg somu" 
      style={styles.inputField}  
      onChangeText={ (val)=>{ setPerson({name : val, gender: person.gender}) } }/>
      
      <Text> Enter age</Text>
      <TextInput  
      
      style={ styles.inputField }
      keyboardType='numeric'

      onChangeText={ (val)=>{ setPerson({name: person.name, gender: val}) } }/>

      
      <Text>Hello this is {person.name} and I'm {person.gender}</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField:{
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    width: 100,


  }
  
});
