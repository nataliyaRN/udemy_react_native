import {Button, StyleSheet, TextInput, View} from "react-native";


type Props = {
    onAddGoal: ()=>{};
    onGoalInput: (enteredText: string )=>{};
}
export default function GoalInput({ onAddGoal, onGoalInput}){






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
        <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={onGoalInput}/>
        <Button title='Add goal' onPress={onAddGoal}/>
    </View>

}