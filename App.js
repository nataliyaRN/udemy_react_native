import React from 'react';
import { useState } from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const addGoalHandler = () => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
        return null;
    }

    const styles = StyleSheet.create({
        appContainer: {
            paddingTop:50,
            paddingHorizontal:16,
            flex: 1,
        },
        goalsContainer: {
            flex: 5,
        },
    });


  return (
      <View style={styles.appContainer}>
           <GoalInput onAddGoal={addGoalHandler} onGoalInput={goalInputHandler}></GoalInput>
           <View style={styles.goalsContainer}>
              <FlatList data={courseGoals}
                        renderItem={(itemData ) =>  (<GoalItem courseGoals={itemData}/>)}
                        keyExtractor={(item, index) => { return item.id}}/>
           </View>
      </View>
  );


}

