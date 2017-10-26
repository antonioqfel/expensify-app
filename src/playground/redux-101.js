import { createStore } from 'redux';

// Action generator - functions that return function objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// REDUCERS:
// 1. Reducers are pure functions
// 2. Never change state or action


// Reducer always need state and action as arguments
const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':

            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            // We no longer need this because it's been define in the function
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count: action.count
            };

        default:
            return state;
    }

};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// If I want to unsubscribe
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// unsubscribe();

// ACTIONS: an object that gets sent to the store
// I'd like to increment the count
store.dispatch(incrementCount( { incrementBy: 5 }));
store.dispatch(incrementCount());
// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT'
// });

// I'd like to reset the count
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// I'd like to decrement the count
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));


// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount( { count: 101 }));
