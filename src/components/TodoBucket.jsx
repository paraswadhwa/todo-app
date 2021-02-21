import React,{Component} from 'react';
import { TodoList } from './TodoList';
import { InputForm } from './InputForm';

class TodoBucket extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            selectedBucketIndex: 0
        }
    }

    addBucket = (bucketName) => {
        if (!bucketName) {
            return;
        }
        this.props.addBucketDispatch({ name: bucketName })
        this.setState({ selectedBucketIndex: 0 })
    }

    addItem = (value, bucketIndex) => {
        this.props.addTaskDispatch({ value, bucketIndex })
    }

    removeItem = (taskIndex, bucketIndex) => {
        this.props.removeTaskDispatch({ taskIndex, bucketIndex })
    }

    markTodoDone = (taskIndex, bucketIndex) => {
        this.props.doneTaskDispatch({ taskIndex, bucketIndex })
    }

    bucketSelection = (index) => {
        this.setState({
          selectedBucketIndex: index
        })
    }

    bucketElements = () => {
        return (
            <ul className="list-group">
            {
                this.props.buckets.map((bucket, i) => {
                    return <li key= {i} onClick={() => this.bucketSelection(i)} className={`list-group-item bucket-items ${ this.state. selectedBucketIndex == i ? 'selected' : ''}` }> {bucket.name}</li>;
                })
            }
            </ul>
        )
    }

    todoListElement = () => {

        const selectedBucketObject = this.props.buckets[this.state.selectedBucketIndex];

        if(selectedBucketObject){
            return(
                <TodoList
                    key={selectedBucketObject.name + this.state.selectedBucketIndex}
                    bucket={selectedBucketObject}
                    addItem={(value) => {
                        this.addItem(value, this.state.selectedBucketIndex)
                    }}
                    removeItem={this.removeItem}
                    markTodoDone={this.markTodoDone}
                    bucketIndex={this.state.selectedBucketIndex}
                />
            )
        }
        return null;
    }

    render() {

        return (
            <div className="main">
                <div className="left">
                    <center><h1> Buckets </h1></center>
                    <div className="input-form-inline">
                        <InputForm buttonText='Create Bucket' onValueChange={this.addBucket} />
                    </div>
                    <div>
                        {this.bucketElements()}
                    </div>
                </div>
                <div className="right">
                    <center><h1> Tasks </h1></center>
                    {this.todoListElement()}
                </div>
            </div>
        )
    }
}

export default TodoBucket;