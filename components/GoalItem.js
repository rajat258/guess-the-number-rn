import { useState } from "react";
import { StyleSheet, 
Modal,TextInput, StatusBar,
View, Text, Image, FlatList,
ImageBackground,
TouchableOpacity
} from "react-native";

function GoalItem({text, count}){
    
    return(
        <View style={styles.goalItem}>
            <Text style={styles.Item}>{count}{'). '}{text}</Text>
        </View>
    );
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 10,
        margin: '2%',
        marginLeft: '5%',
        marginRight: '50%',
        backgroundColor: '#CBD1C7',

    },

    Item: {
        // color: '#433A69',
        padding: 7,
        fontSize: 18,
    },
})