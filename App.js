import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
inport {GrAdd} from 'react-icons/gr'
import { Task } from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
     
     <View style={styles.taskContainer}>
       <Text style={styles.sectionTitle}>
         To-do List
       </Text>
     </View>

     <View style={styles.items}>
      < Task text={'Task 1'} />
      < Task text={'Task 2'}/>
     </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style = {styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder={'Write a to-do'}>

          </TextInput>

          <TouchableOpacity>
            <View style ={styles.addButtonContainer}>
              <Text style={styles.addButton}>Add</Text>
            </View>
          </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CED7D6',
    
  },
taskContainer: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#252E2D'
},
items: {
  marginTop: 30,
},
textInputContainer: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
textInput: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  paddingLeft: 15,
  backgroundColor: 'white',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 2,
  width: 250,

},
addButtonContainer: {
  width: 60,
  height: 60,
  backgroundColor: 'white',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 2,

},
addButton: {},
});
