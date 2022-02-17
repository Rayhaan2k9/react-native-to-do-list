import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
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

    <KeyboardAvoidingView></KeyboardAvoidingView>

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
});
