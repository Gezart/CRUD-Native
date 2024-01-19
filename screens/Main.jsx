import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalList from '../components/GoalList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Main = () => {
  const [goals, setGoals] = useState([])
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentGoalId, setCurrentGoalId] = useState(null);

  const addGoalHandler = (goalText) => {
    if (isEditMode) {
      setGoals(currentGoals =>
        currentGoals.map(goal =>
          goal.id === currentGoalId ? { ...goal, text: goalText } : goal
        )
      );
      setIsEditMode(false);
    } else {
      setGoals([...goals, { id: Math.random().toString(), text: goalText }]);
    }
  };

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)

    })
  }

  const editGoalHandler = (id, text) => {
    setCurrentGoalId(id);
    setIsEditMode(true);
    // Set the text in GoalInput for editing
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
        <GoalInput addGoalHandler={addGoalHandler} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
        <GoalList deleteGoalHandler={deleteGoalHandler} goals={goals} editGoalHandler={editGoalHandler} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      </View>
    </GestureHandlerRootView>
  )
}

export default Main


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "#ccc",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
});
