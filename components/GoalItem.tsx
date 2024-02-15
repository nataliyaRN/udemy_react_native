import {FlatList, StyleSheet, Text, View} from "react-native";


type Props = {
    courseGoals: any[],
}


export default function GoalItem({courseGoals}){
    return (
            <View key ={courseGoals.item.text} style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {courseGoals.item.text}
                </Text>
            </View>)
}
const styles = StyleSheet.create({

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