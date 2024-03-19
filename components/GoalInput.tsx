import {Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";
import {useState} from "react";


type Props = {
    onAddGoal: (enteredText : string)=>{};
    isModalVisible: boolean;
    onCancel: ()=>{};

}
export default function GoalInput({ onAddGoal, isModalVisible, onCancel}){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText : string) => {
        setEnteredGoalText(enteredText);
    }
    const onAddGoalInvoked = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    const styles = StyleSheet.create({
        inputContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            flexDirection:'column',
            padding: 16,
            backgroundColor:'#311b6b'
        },
        textInput: {
            borderWidth: 1,
            borderColor: '#e4d0ff',
            backgroundColor: '#e4d0ff',
            color:'#120438',
            borderRadius:6,
            width: '100%',
            padding: 16,
        },
        buttonContainer: {
            flexDirection: 'row',
            marginTop: 16,
        },
        button: {
            width: '30%',
            marginHorizontal: 8,
        },
        image:{
            width:100,
            height:100,
            margin:20,
        }
     });


    return  <Modal animationType={"slide"} visible={isModalVisible}>
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image}/>
            <TextInput placeholder='Your course goal' style={styles.textInput}
                       onChangeText={goalInputHandler}
                       value ={enteredGoalText}/>
            <View style={styles.buttonContainer}>

                <View style={styles.button}>
                    <Button title='Cancel' onPress={onCancel} color='#f31282'/>
                </View>
                <View style={styles.button}>
                    <Button title='Add goal' onPress={onAddGoalInvoked} color='#5e0acc'/>
                </View>
            </View>
        </View>
    </Modal>

}