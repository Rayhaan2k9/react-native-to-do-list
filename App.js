import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { Task } from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task])
    setTask(null)
  }

  const deleteTask = (index) => {
    let tasksCopy = [...taskList];
    tasksCopy.splice(index, 1);
    setTaskList(tasksCopy)
  }

  return (
    <View style={styles.container}>
     
     <View style={styles.taskContainer}>
       <Text style={styles.sectionTitle}>
         To-do List
       </Text>
     </View>

     <View style={styles.items}>

       {
         taskList.map((item, index) => {
           return <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
             < Task text={item} />
           </TouchableOpacity>
         })
       }
     </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style = {styles.textInputContainer}>
          <TextInput style={styles.textInput} value={task} onChangeText={currText => setTask(currText)} placeholder={'Write a to-do'}>

          </TextInput>

          <TouchableOpacity onPress={task ? () => handleAddTask(): null}>
            <View style ={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
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
  alignSelf: 'center',
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
addButton: {
  fontSize: 30,
  color: '#55BCF6',
},
});
