import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";


type Props = {
    onAddGoal: (enteredText : string)=>{};

}
export default function GoalInput({ onAddGoal}){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const onAddGoalInvoked = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('')
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
        <TextInput placeholder='Your course goal' style={styles.textInput}
                   onChangeText={goalInputHandler}
                   value ={enteredGoalText}/>
        <Button title='Add goal' onPress={onAddGoalInvoked}/>
    </View>

}