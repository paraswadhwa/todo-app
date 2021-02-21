import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import TodoBucket           from '../components/TodoBucket';

import {
    addBucket,
    addTask,
    doneTask,
    removeTask
}                           from '../actions';


const TodoContainer = props => {
    return <TodoBucket {...props} />
};

const mapStateToProps = state => {

    const { todoReducer } = state;

    return {
        buckets : todoReducer.buckets
    };
};

const mapDispatchToProps = dispatch => ({

    addBucketDispatch(data){
        dispatch(addBucket(data));
    },

    addTaskDispatch(data){
        dispatch(addTask(data));
    },

    doneTaskDispatch(data){
        dispatch(doneTask(data));
    },

    removeTaskDispatch(data){
        dispatch(removeTask(data));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoContainer));