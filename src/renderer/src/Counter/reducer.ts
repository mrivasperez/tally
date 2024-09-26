export const INCREMENT_COUNT = 'increment'
export const SET_VALUE_TO_ADD = 'change_value_to_add'
export const DECREMENT_COUNT = 'decrement'
export const ADD_VALUE_TO_COUNT = 'add_value_to_count'

export interface CounterState {
  count: number
  valueToAdd: number
}

export const reducer = (state: CounterState, action): CounterState => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    default:
      return state
  }
}
