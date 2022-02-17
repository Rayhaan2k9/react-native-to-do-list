import react from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
taskText: {
    color: 'black',
    maxWidth: 80,
},
item: {
    backgroundColor: '#F3F5F5',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    borderRadius: 8,
    marginRight: 15,
},
circle: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
},

})