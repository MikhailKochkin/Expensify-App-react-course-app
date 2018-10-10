import { createStore } from 'redux';

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET',
})

const countReducer = (state = { count: 1 }, action) => {
  // return state;
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 10
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})

//
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 5}))
store.dispatch(resetCount())


// console.log(store.getState())
