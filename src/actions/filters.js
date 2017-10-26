// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
// We don't do const setStartDate = (startDate = undefined) because that's the default value by default
// That is the normal functionality for arguments
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});