import { useState } from "react";
import { StyleSheet, 
Modal,TextInput, StatusBar,
View, Text, Image, FlatList,
ImageBackground,
TouchableOpacity
} from "react-native";
import GoalItem from "./GoalItem";
function GameArea2({randomNumber, setViewIsVisible}) {
    const [fixedNumbers, setFixedNumbers] = useState('');
    const [fixedNumberArray, setFixedNumberArray] = useState([]);
    const [count, setCount] = useState(0);
    const [chances, setChances] = useState(6);
    function addgoalhandler(enteredvalue) {
        setFixedNumberArray((currentfixedNumbers) => [
        ...currentfixedNumbers, 
        {text: enteredvalue, id: Math.random().toString()}]);
    };
    function backspace(){
        // setFixedNumbers(fixedNumbers.slice(0,-1))
    }
    function CloseGame() {
        setViewIsVisible(false);
    }
    function ButtonClick(text){
        // setFixedNumbers()
        // setFixedNumber({fixedNumber} + text)
    }
    function CheckAnswer(text){
        if(fixedNumbers > 99 || fixedNumbers < 1){
            // setFixedNumberArray(fixedNumberArray.slice(0,-1))
            alert('Enter between 1 - 99');
            setFixedNumbers('');
        }
        else if(chances == 1){
            alert('Out of Chances :(')
            CloseGame()
        }
        else if(fixedNumbers == randomNumber){
            alert('WON');
            setFixedNumbers('');
            CloseGame();
        }
        else if(fixedNumbers > randomNumber){
            alert('Guess Lower.!')
            addgoalhandler(text);
            setCount(count+1);
            setChances(chances-1);
        }
        else if(fixedNumbers < randomNumber){
            alert('Guess Higher.!')
            addgoalhandler(text);
            setCount(count+1);
            setChances(chances-1);
        }
        setFixedNumbers('');
        
        
    }
    return(
        <Modal>
            <StatusBar style='light' />
            <ImageBackground  
                resizeMode= 'cover' 
                style={styles.backgroundimage}
                source={require('../assets/images/background1.png')} >

                <TouchableOpacity style={styles.BackButtonContainer} onPress={CloseGame}>    
                    <Image source={require('../assets/images/back1.png')}
                        style={styles.BackButtonImg}></Image>
                </TouchableOpacity>

                <View style={styles.TextContainer}>
                    <Text style={styles.Text} >Guess The Number!</Text>
                </View>
                <View style={styles.InputOuterContainer}>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={styles.Input}
                            showSoftInputOnFocus={false}
                            onChangeText={(fixedNumbers) => {
                                if(fixedNumbers.length > 2){
                                    console.log('hi');
                                }
                            }}>{fixedNumbers}</TextInput>
                    </View>
                    <View style={styles.backspaceOuterContainer}>
                        <TouchableOpacity style={styles.backspaceContainer} onPress={backspace}>    
                            <Image source={require('../assets/images/backspace.png')}
                                style={styles.backspaceImg}></Image>
                </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.NumberPadContainer}>
                    <View style={styles.OneTwoThreeContainer}>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {
                                setFixedNumbers(fixedNumbers + '1')}}>    
                            <Text style={styles.OneText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '2')}}>    
                            <Text style={styles.OneText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '3')}}>    
                            <Text style={styles.OneText}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.FourFiveSixContainer}>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '4')}}>    
                            <Text style={styles.OneText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '5')}}>    
                            <Text style={styles.OneText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '6')}}>    
                            <Text style={styles.OneText}>6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SevenEightNineContainer}>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '7')}}>    
                            <Text style={styles.OneText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '8')}}>    
                            <Text style={styles.OneText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '9')}}>    
                            <Text style={styles.OneText}>9</Text>
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.SevenEightNineContainer}>
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => {setFixedNumbers(fixedNumbers + '0')}}>    
                            <Text style={styles.OneText}>0</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity style={styles.OneContainer} 
                            onPress={() => CheckAnswer(fixedNumbers)}>    
                            <Text style={styles.OneText}>Enter</Text>
                        </TouchableOpacity>
                    </View>      
                </View>

                <View style={styles.ListButtonContainer}>
                    <View style={styles.ListInnerContainer}>
                        <FlatList 
                            style={styles.taskContainer}
                            data={fixedNumberArray}
                            renderItem={(itemData) => {
                                return(
                                    <GoalItem 
                                        text={itemData.item.text}
                                        id={itemData.item.id}
                                        count={count}/>
                                )
                            }}
                            keyExtractor={(item, index) => {
                                return(item.id);
                            }}/>
                    </View>
                    <View style={styles.ResetButtonOuterContainer}>
                        <TouchableOpacity style={styles.ResetButton} 
                            onPress={() => {
                                setFixedNumbers('');
                                setFixedNumberArray([]);
                                setChances(6);}}>    
                            <Text style={styles.ResetButtonText}>Reset</Text>
                        </TouchableOpacity>
                        <View style={styles.chancess}>
                            <Text style={styles.chancesText}>{chances}{' chances Left.'}</Text>
                        </View>
                        
                    </View>
                    

                    
                </View>
                
                
            </ImageBackground>
        </Modal>
    )      
}
const styles = StyleSheet.create({
    BackButtonContainer: {
        marginVertical: 10,
        // backgroundColor: '#ffffff45',
    },
    backgroundimage: {
        width: '100%',
        height: '100%',
    },
    TextContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        padding: '2%',
        alignItems: 'center',
        backgroundColor: '#CBD1C7',
        borderRadius: '8%',
    },
    Text: {
        textAlign: 'center',
        fontSize: 28,
        color: '#7B144E',
    },
    BackButtonImg: {
        marginTop: '6%',
        marginBottom: '3%',
        width: 40,
        height: 40,
    },
    InputOuterContainer: {
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 150,
        marginRight: 90,
    },
    InputContainer: {
        flex: 1,
        // alignItems: 'flex-end',
        marginTop: 20,
        marginStart: 150,
        
        borderColor: '#7B144E',
        // alignItems: 'flex-end',    
        borderBottomWidth: 3,
    },
    Input: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',    
    },
    backspaceOuterContainer: {
        marginRight: 40,
        // backgroundColor: '#7B144E',
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 20,
    },
    backspaceContainer: {
        
    },
    backspaceImg: {
        width: 30,
        height: 30,
    },
    NumberPadContainer: {
        flexDirection: 'column',
        marginHorizontal: '20%',
        marginTop: '20%',
        
    },
    OneTwoThreeContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        
        textAlign: 'center',
    },
    FourFiveSixContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    SevenEightNineContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    OneContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        margin: '2%',
        padding: '2%',
        backgroundColor: '#CBD1C7',
    },
    OneText: {
        textAlign: 'center',
        fontSize:20,
    },
    ListButtonContainer: {
        flexDirection: 'row',
    },
    ListInnerContainer: {
        flex: 1,
    },
    taskContainer: {
        marginTop: 10,
        paddingTop: 10, 
        // backgroundColor: '#CBD1C7', 
    },
    ResetButtonOuterContainer: {
        marginTop: 25,
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: 180,
    },
    ResetButton: {

        marginLeft: 50,
        flex: 1,
        padding: 5,
        paddingHorizontal: 20,
        marginRight: 50,
        backgroundColor: '#CBD1C7',
        borderWidth: 1,
        borderRadius: 20,
        
        
    },
    ResetButtonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    chancess: {
        alignSelf: 'center',
        marginTop: 50,
    //    alignItems: 'center',
    },
    chancesText: {
        fontSize: 18,
        textAlign: 'center',
    },
})
export default GameArea2 