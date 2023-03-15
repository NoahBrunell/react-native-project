import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal, Image, } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  // Update the text
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  // Add text to the goal and reset text
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }

  // JSX code
  return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
          <TextInput 
         style={styles.textInput} 
          placeholder='Input your goal!' 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
    </View>
    </Modal>
   )
}

export default GoalInput

// Styling
const styles = StyleSheet.create({ 
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
})