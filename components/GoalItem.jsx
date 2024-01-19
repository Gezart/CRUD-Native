import React, { useState } from 'react';
import { StyleSheet, View, Text, Animated, Alert } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const GoalItem = (props) => {

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const handleUpdatePress = () => { 
      props.editGoalHandler(props.id);
      props.setIsEditMode(true)
    }

    const handleDeletePress = () => {
      Alert.alert(
        "Delete Goal", 
        "Are you sure you want to delete this goal?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Delete", onPress: () => props.deleteGoalHandler(props.id), style: 'destructive' }
        ],
        { cancelable: true }
      );
    };

    return (
      <View style={styles.actions}>
        <RectButton style={[styles.button, styles.done]}>
          <Animated.Text
            style={[
              styles.text,
              {
                transform: [{ translateX: trans }],
              },
            ]}>
            Done
          </Animated.Text>
        </RectButton>
        <RectButton style={[styles.button, styles.update]} onPress={handleUpdatePress}>
          <Animated.Text
            style={[
              styles.text,
              {
                transform: [{ translateX: trans }],
              },
            ]}>
            Update
          </Animated.Text>
        </RectButton>
        <RectButton style={[styles.button, styles.delete]} onPress={handleDeletePress}>
          <Animated.Text
            style={[
              styles.text,
              {
                transform: [{ translateX: trans }],
              },
            ]}>
            Delete
          </Animated.Text>
        </RectButton>
      </View>
    );
  };

  return (
    <View style={{marginBottom: 10}}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={[styles.goalItem, props.isEditMode ? styles.updatedGoalItem : null ]}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Swipeable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#5e0acc",
    gap: 10,
  },
  goalText: {
    color: "#fff"

  },
  actions: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    textAlign: "center",
    alignItems: "center",
    flex: 2,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  done: {
    backgroundColor: "blue",
  },
  update: {
    backgroundColor: "gray",
  },
  delete: {
    backgroundColor: "red",
  },
  updatedGoalItem: {
    backgroundColor: "gray",
  }

});

