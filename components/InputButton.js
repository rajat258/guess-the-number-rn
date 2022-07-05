// import AnimatedNumber from "react-animated-number";
import { useState } from "react";
import { StyleSheet, 
View,
TouchableOpacity, 
Image, 
Modal,
} from "react-native";
import TextView from './TextView';
import PlayButton from "./PlayButton";

function ButtonInput(){
    const [viewIsVisible, setViewIsVisible] = useState(false);
    const [viewIsVisible2, setViewIsVisible2] = useState(false);
    const [randomNumber,setRandomNumber] = useState()

    function HandleRandomNumber(){
        setViewIsVisible2(false);
        setViewIsVisible(false);

        setTimeout(() => {
            setViewIsVisible2(true);
        }, 1);
        
        setTimeout(() => {
            setViewIsVisible(true);
        }, 1920);  

        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }
    
    return(
        <View style={styles.MainContainer}>
            <View style={styles.ButtonContainer}>

                <TouchableOpacity style={styles.RandomButtonContainer} onPress={HandleRandomNumber}> 
                    {/* <Text style={styles.RandomButtonText}>Generate</Text> */}
                    {/* <Image  style={styles.RandomNumberGeneratorImg} 
                        source={require('../assets/images/dice.gif')}/> */}
                    <Image  style={styles.RandomNumberGeneratorImg} 
                        source={require('../assets/images/dice.png')}/>
                    
                </TouchableOpacity>
            </View>
            {/* <View style={styles.RandomNumberTextContainer}>
                <TypeWriter typing={1} style={styles.RandomNumberText}>
                    Number is Generated</TypeWriter>
            </View> */}
            
            {viewIsVisible2 && <TextView />}
            {viewIsVisible && <PlayButton 
                style={styles.PlayButton} 
                randomNumber={randomNumber}/>}
        </View> 
    );
};
export default ButtonInput

const styles = StyleSheet.create({
    MainContainer: {
        flexDirection: 'column',
    },
    ButtonContainer: {
        flex: 1,
        marginTop: '8%',
        width: 110,  
        position: 'absolute',
        alignSelf: 'center',
        color: '#00000'
    },
    RandomButtonContainer: {
        
    },
    RandomNumberGeneratorImg: {
        height: 80,
        width: 130,

        // height: 70,
        // margin: '5%',
        // marginBottom: 10,
        alignSelf: 'center',
        // backgroundColor: '#EBF1FF',
    },
    RandomButtonText: {
        fontSize: 18,
        color: '#1C2835',
        textAlign: 'center',
    },
})