import React from 'react';
import { shallow } from 'enzyme'
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    // We take a snapshot before we make the changes
    expect(wrapper).toMatchSnapshot();
    // We need to find the form to simulate the submission
    wrapper.find('form').simulate('submit', {
        // We need to fake the event (e)
        preventDefault: () => { }
    });
    // We write an expect statement that fetches the state and makes sure
    // that it's not empty
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    // Because the original state of error is an empty string, we check
    // if it has change

    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    // We want to match the first input, which is the description
    wrapper.find('input').at(0).simulate('change', {
        // we have to simulate the target.value from change (e)
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.15';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if valid input', () => {
    const value = '12.222';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

/*
test('should call onSubmit prop for valid form submission', () => {
    // In order to create a new spy, we use jest.fn() with no arguments
    const onSubmitSpy = jest.fn();
    // If onSubmitSpy has not been call test will throw an error
    onSubmitSpy();
    expect(onSubmitSpy).toHaveBeenCalled();
});
*/

test('should call onSubmit prop for valid form submission', () => {
    // 1. In order to create a new spy, we use jest.fn() with no arguments
    const onSubmitSpy = jest.fn();

    // 2. Render expense form (We take the first expense)
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    // 3. Simulate the form submission
    wrapper.find('form').simulate('submit', {
        // We need to fake the event (e)
        preventDefault: () => { }
    });

    // 4. Assertions
    expect(wrapper.state('error')).toBe('');
    // Check if it's called with the correct data
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();

    // 1. Render the component
    const wrapper = shallow(<ExpenseForm />);

    // 2. Trigger the prop from that child component from SingleDatePicker // Find the component
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    // 3. Assertions
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {

    const focused = true;

    // 1. Render the component
    const wrapper = shallow(<ExpenseForm />);

    // 2. Trigger the prop from that child component from SingleDatePicker
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused }); // onFocusChange expects and object as argument

    // 3. Assertions
    expect(wrapper.state('calendarFocused')).toBe(focused);
});