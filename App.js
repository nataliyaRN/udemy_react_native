import React from 'react';
import { useState } from 'react';
import {  StyleSheet, View, } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const styles = StyleSheet.create({
        appContainer: {
            paddingTop:50,
            paddingHorizontal:16,
            flex: 1,
        },

    });


  return (
      <View style={styles.appContainer}>
           <GoalInput courseGoals={courseGoals}  setCourseGoals = {setCourseGoals}></GoalInput>
          <GoalItem courseGoals={courseGoals}></GoalItem>

      </View>
  );


}

