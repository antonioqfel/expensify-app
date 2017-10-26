import moment from 'moment';

const filters = {
    endDate: undefined,
    text: '',
    sortBy: 'date',
    startDate: undefined
};

const altFilters = {
    endDate: moment(0).add(3, 'days'),
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0)
};

export { filters, altFilters };