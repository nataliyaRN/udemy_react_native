import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";


type Props = {
    courseGoals: any[],
    onDeleteItem: (item : object)=>{};
    id: number;
}



export default function GoalItem({courseGoals, onDeleteItem, id}){
    return (
        <View key ={courseGoals.item.text} style={styles.goalItem}>
            <Pressable onPress={onDeleteItem.bind(this, id)}
                       android_ripple={styles.pressedItem}
                       style={(pressed) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>
                    {courseGoals.item.text}
                </Text>
            </Pressable>
        </View>)
}
const styles = StyleSheet.create({

    goalItem: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#4e0fcc',
        backgroundColor:'#7448ad',
        margin: 8,
    },
    goalText: {
        color: 'white',
        padding: 8
    },
    pressedItem: {
        color: '#C2A4E8FF',
        opacity: 0.5
    }
});