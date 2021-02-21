
import { TODO_ACTIONS } from '../constants/actionTypes';

export const addBucket = ({ name }) => ({
    type: TODO_ACTIONS.ADD_BUCKET,
    name,
})

export const addTask = ({ value, bucketIndex }) => ({
    type: TODO_ACTIONS.ADD_TASK,
    value,
    bucketIndex,
})

export const doneTask = ({ taskIndex, bucketIndex }) => ({
    type: TODO_ACTIONS.DONE_TASK,
    taskIndex,
    bucketIndex,
})

export const removeTask = ({ taskIndex, bucketIndex }) => ({
    type: TODO_ACTIONS.REMOVE_TASK,
    taskIndex,
    bucketIndex,
})

export default {
    addBucket,
    addTask,
    doneTask,
    removeTask,
}