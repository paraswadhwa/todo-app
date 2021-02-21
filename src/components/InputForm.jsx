import React from 'react';

export class InputForm extends React.Component {
    
    componentDidMount() {
        this.refs.itemName.focus();
    }

    onSubmit = (event) => {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;

        if (newItemValue) {
            const { onValueChange } = this.props;
            onValueChange(newItemValue);
            this.refs.form.reset();
        }
    }

    render() {
        const { buttonText } = this.props;

        return (
            <form ref="form" className="input-form input-form-inline" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Name" ref="itemName" className="form-control text" />
                <button type="submit" className="btn btn-default submit">{buttonText}</button>
            </form>
        )
    }
}