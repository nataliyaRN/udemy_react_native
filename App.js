import React from 'react';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import {StatusBar } from "expo-status-bar";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
        endModalGoalHandler();
    }


    const deleteGoalHandler = (id) => {
        setCourseGoals(
            (currentCourseGoals ) => currentCourseGoals.filter(
                    (goal) =>  goal.id !== id)
        );
    }

    const startModalGoalHandler = () => {
        setModalIsVisible(true);
    }

    const endModalGoalHandler = () => {
        setModalIsVisible(false);
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
      <>
          <StatusBar style='white'>
              <View style={styles.appContainer}>
                   <Button title='Add new goal' color='#7448ad' onPress={startModalGoalHandler}/>
                   <GoalInput onAddGoal={addGoalHandler} isModalVisible={modalIsVisible} onCancel = {endModalGoalHandler}/>
                   <View style={styles.goalsContainer}>
                      <FlatList data={courseGoals}
                                renderItem={(itemData ) =>  (
                                    <GoalItem courseGoals={itemData} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>)}
                                keyExtractor={(item, index) => { return item.id}}/>
                   </View>
              </View>
          </StatusBar>
      </>
  );


}

