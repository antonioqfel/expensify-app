import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    // In order to change the props we use setProps. We need to pass and object
    // containing the new value. In this example we want to change the value of filters
    wrapper.setProps({
        filters: altFilters
    });

    // Assertions
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',() => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });

    // Assertions
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',() => {
    const value = 'date';
    // Because sortBy is date by default, then set the altFilters which containst sortBy amount
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });

    // Assertions
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',() => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });

    // Assertions
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',() => {
    /**
     * We need to make sure that when the picker from react dates fires
     * that event, it actually works as expected. What do we expect to happen?
     * We expect it to get called with and object with startDate and endDate
     * and all we do is passing those up through the props.
     */
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');

    // We select the DateRangePicker, we select its prop onDatesChange and
    // finally we pass the values: ({ startDate, endDate })
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

    // Assertions
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',() => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

    // Assertions
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});