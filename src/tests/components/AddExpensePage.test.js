import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

// Because we have the same three lines in two test we can simplify this
let addExpense, history, wrapper;

/**
 * Runs a function before each of the tests in this file runs.
 * If the function returns a promise, Jest waits for that promise to
 * resolve before running the test
 */
beforeEach(() => {
    // AddExpensePage expects two props: onSubmit and history
    addExpense = jest.fn();
    history = { push: jest.fn() };
    // Render the component
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render onSubmit', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]); // We pass the expense

    // Assertions
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);

});

