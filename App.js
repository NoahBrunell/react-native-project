import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button,
} from 'react-native';
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  // Make modal visible
  function startAddGoalHandler() {
    setModalVisible(true)
  }

  // Make modal not visible
  function endAddGoalHandler() {
    setModalVisible(false)
  }

  // Adds new goal to the list and gives it a random id
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    setModalVisible(false)
  }

  // Removes a goal from the list based of it's id
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  // JSX code
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button 
      title='Add New Goal' 
      color="#a065ec"
      onPress={startAddGoalHandler}
      />
     <GoalInput 
       visible={modalIsVisible} 
       onAddGoal={addGoalHandler}       
       onCancel={endAddGoalHandler} 
      />
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
          <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler} 
          />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false}>
        </FlatList>
      </View> 
    </View>
    </>
  );
}

// Styling
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
