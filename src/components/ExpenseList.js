import React from 'react';
import { connect } from 'react-redux'; // connect my component to the redux store
import ExpenseListItem from './ExpenseListItem';
// Import the selector wich is the filtered array and not the whole array of items
import selectExpenses from '../selectors/expenses';

// In order to test the unconnected version we have to import it
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

// Higher Order Component
// const ConnectedExpenseList = connect((state) => {
//     return {
//         // We define the key name we want and assign it something from the state
//         expenses: state.expenses
//     };
// })(ExpenseList);
//
// export default ConnectedExpenseList;

/**
 * More common to use as follows:
 */

// When I connect a component to the Redux store is reactive, which means as
    // the store changes my component is going to be render with those new values.
    // This component does not need to worry about using store.subscribe or
    // store.state. All I have to do is define how I want to render things
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);