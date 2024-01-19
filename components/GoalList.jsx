import React from 'react'
import GoalItem from '../components/GoalItem';
import { FlatList, View, StyleSheet } from 'react-native';

const GoalList = (props) => {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={props.goals}
                alwaysBounceVertical={false}
                keyExtractor={(item, index) => { return item.id }}
                renderItem={(itemData => {

                    return (
                        <GoalItem
                            text={itemData.item.text}
                            deleteGoalHandler={props.deleteGoalHandler}
                            id={itemData.item.id}
                            editGoalHandler={props.editGoalHandler}
                            isEditMode={props.isEditMode}
                            setIsEditMode={props.setIsEditMode}

                        />
                    )
                })} />

        </View>
    )
}

export default GoalList

const styles = StyleSheet.create({

    goalsContainer: {
        flex: 4,
    }
});
