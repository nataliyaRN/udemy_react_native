import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const styles = StyleSheet.create({
        appContainer: {
            paddingTop:50,
            paddingHorizontal:16,
            flex: 1,
        },
        inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            borderBottomColor: '#cccccc',
            borderBottomWidth: 1,
            flex:1,
        },
        textInput: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '70%',
            marginRight: 8,
            padding: 8,
        },
        goalsContainer: {
            flex: 5,
        },
        goalItem: {
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#4e0fcc',
            backgroundColor:'#5e0ecc',
            margin: 8,
            padding: 8
        },
        goalText: {
            color: 'white'
        }
    });

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
        return null;
    }

    const addGoalHandler = () => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    }
  return (
      <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
                <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler}/>
                <Button title='Add goal' onPress={addGoalHandler}/>
          </View>
          <View style={styles.goalsContainer}>
              <FlatList data={courseGoals} renderItem={(itemData ) => {return (
                  <View key ={itemData.item.text} style={styles.goalItem}>
                      <Text style={styles.goalText}>
                          {itemData.item.text}
                      </Text>
                  </View>);
              }}
              keyExtractor={(item, index) => { return item.id}}/>
          </View>
      </View>
  );


}

