import {FlatList, StyleSheet, Text, View} from "react-native";


type Props = {
    courseGoals: any[],
}


export default function GoalItem({courseGoals}){

    return (
    <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData ) => {return (
            <View key ={itemData.item.text} style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {itemData.item.text}
                </Text>
            </View>);
        }}
                  keyExtractor={(item, index) => { return item.id}}/>
    </View>)
}
const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
    },
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