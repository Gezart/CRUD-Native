import { useEffect, useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  useEffect(() => {
    if (props.isEditMode) {
      setEnteredGoalText(props.editText);
    }
  }, [props.isEditMode, props.editText]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }
  const addGoalHandler = () => { 
      props.addGoalHandler(enteredGoalText)
      setEnteredGoalText("")
   }

  return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder={props.isEditMode ? "Edit Goal" :'Add Goal'} onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title={props.isEditMode ? "Edit Goal" :'Add Goal'} onPress={addGoalHandler} />
      </View>
  )
}

export default GoalInput

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
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff"

  }
});
