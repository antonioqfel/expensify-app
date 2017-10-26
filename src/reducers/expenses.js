// Expenses reducer
const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action)
export default (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            // With the spread operator we don't change the original state
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
            // return state.filter((expense) => {
            //     return expense.id !== action.expense.id;
            // });

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates // Overwrite the ones containing values
                    };
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
};