import { TODO_ACTIONS } from '../constants/actionTypes';

const initialState = {
    buckets: []
};

export default function (state = initialState, action) {

    switch (action.type) {

        case TODO_ACTIONS.ADD_BUCKET: {

            return {
                ...state,
                buckets : [{ name: action.name, items: [] }, ...state.buckets]
            }
        }

        case TODO_ACTIONS.ADD_TASK: {

            const { buckets } = state;
            
            const task = {
                done    : false,
                value   : action.value,
            }

            const taskBucket = { ...buckets[action.bucketIndex] }
            taskBucket.items.push(task);

            buckets[action.bucketIndex] = taskBucket;

            return {
                ...state,
                buckets : [...buckets]
            }
        }

        case TODO_ACTIONS.REMOVE_TASK: {

            const { buckets } = state;

            const taskBucket = buckets[action.bucketIndex];

            taskBucket.items.splice(action.taskIndex, 1);

            buckets[action.bucketIndex] = taskBucket;

            return {
                ...state,
                buckets : [...buckets]
            }
        }

        case TODO_ACTIONS.DONE_TASK: {

            const { buckets } = state;

            const taskBucket = buckets[action.bucketIndex];

            const item = taskBucket.items[action.taskIndex];
            item.done  = !item.done;

            return {
                ...state,
                buckets : [...buckets]
            }
        }

        default:
            return state;
    }
};