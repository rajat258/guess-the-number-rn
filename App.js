import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
 Text, 
 View,
 TouchableWithoutFeedback, 
 ImageBackground,
 Keyboard
 } from 'react-native';
 
import ButtonInput from './components/InputButton';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground  
          resizeMode= 'cover' 
          style={styles.backgroundimage}
          source={require('../GuessTheNumber/assets/images/background1.png')} >
            <View style={styles.TextContainer}>
              <Text style={styles.Text} >Guess The Number!</Text>
            </View>

            <View style={styles.BoxContainer}>

              <View style={styles.NumberContainer}>
                <Text style={styles.EnterNumberText}>Generate a Number</Text>
              </View>

              <ButtonInput />                               

            </View>

        </ImageBackground>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundimage: {
    // opacity: 0.8,
    width: '100%',
    height: '100%',
  },
  TextContainer: {
    marginTop: '15%',
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
  BoxContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '10%',
    marginBottom: '85%',
    borderRadius: 20,
  },
  NumberContainer: {

  },
  EnterNumberText: {
    fontSize: 22,
    color: '#F0A694',
    letterSpacing: 1.5,
  },
  
});
