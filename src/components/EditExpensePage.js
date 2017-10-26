import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        // Dispatch the action to edit the expense
        this.props.editExpense(this.props.expense.id, expense);
        // Redirect to the dashboard
        this.props.history.push('/');
        //console.log('Updated: ', expense);
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                {/* Editing the expense {this.props.match.params.id}*/}
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

// We can apply the same pattern to implicit return an object as mapDispatchToProps does
const setStateToProps = (state, props) => {
    return {
                 // find an abject inside the array
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

// The argument props is available for us to use if we ever needed to
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(setStateToProps, mapDispatchToProps)(EditExpensePage);