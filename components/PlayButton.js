import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import TypeWriter from "react-native-typewriter";
import GameArea from "./GameArea";
function PlayButton({randomNumber}) {
    const [viewIsVisible, setViewIsVisible] = useState(false);

    function OpenGame() {
      setViewIsVisible(true);
    }
    return (
      <View style={styles.LetsPlayButtonContainer}>
        
        {/* <Text>{randomNumber}</Text> */}
        
        <TouchableOpacity style={styles.PlayButtonContainer} onPress={OpenGame}>    
          <Text style={styles.PlayButtonText}>Let's Play</Text>
        </TouchableOpacity>

        {viewIsVisible === true 
          ? <GameArea randomNumber={randomNumber} 
            setViewIsVisible={setViewIsVisible}/> 
          : null}
      </View>
  );
}

export default PlayButton;

const styles = StyleSheet.create({
  LetsPlayButtonContainer: {
    marginTop: '35%',
  },
  RandomNumberText: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
  },
  PlayButtonContainer: {
    marginTop: 100,
    padding: 5,
    width: 130,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  PlayButtonText: {
    alignSelf: 'center',
    fontSize: 18,
  },
});
