import {Button, StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";

type Props = {
    courseGoals: any[],
    setCourseGoals: (any[]);
}
export default function GoalInput({courseGoals, setCourseGoals}){

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
        return null;
    }

    const addGoalHandler = () => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    }
    const styles = StyleSheet.create({
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
        }});


    return  <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
    </View>

}