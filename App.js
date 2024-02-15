import React from 'react';
import { useState } from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';
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
        goalsContainer: {
            flex: 5,
        },
    });


  return (
      <View style={styles.appContainer}>
           <GoalInput courseGoals={courseGoals}  setCourseGoals = {setCourseGoals}></GoalInput>
           <View style={styles.goalsContainer}>
              <FlatList data={courseGoals} renderItem={(itemData ) => {
                  return
                  (<GoalItem courseGoals={itemData}/>)
              }}
               keyExtractor={(item, index) => { return item.id}}/>
           </View>
      </View>
  );


}

