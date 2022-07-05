import { useState } from "react";
import { StyleSheet, 
View,
} from "react-native";
import TypeWriter from "react-native-typewriter";

function TextView(){
    // function ViewVisible(){
    //     setViewIsVisible(true);
    // }
    return(
        <View style={styles.RandomNumberTextContainer}>
            <TypeWriter 
                typing={1} 
                style={styles.RandomNumberText}>
                Number is Generated</TypeWriter>
            
        </View>
    );
};
export default TextView

const styles = StyleSheet.create({
    RandomNumberTextContainer: {
        marginTop: '35%',
        alignItems: "center",
    },
    RandomNumberText: {
        fontSize: 24,
        fontWeight: "500",
        color: "black",
    },
})