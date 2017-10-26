import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm  from './ExpenseForm';
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
        // props.history.push only take a single argument which switch me over the page I want to redirect
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

/**
 * mapDispatchToProps is pretty similar to mapStateToProps though instead
 * of working with the state it works with dispatch
 */

// This gets called with dispatch and the goal is to return and object
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (expense) => dispatch(addExpense(expense))
//     };
// };

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

// We write undefined because we are not using mapStateToProps as first argument
export default connect(undefined, mapDispatchToProps)(AddExpensePage);