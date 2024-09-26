import { useReducer } from 'react'
import {
  ADD_VALUE_TO_COUNT,
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  reducer,
  SET_VALUE_TO_ADD
} from './reducer'

interface CounterProps {
  initialCount: number
}

const Counter = ({ initialCount }: CounterProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const handleIncrement = (): void => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }
  const handleDecrement = (): void => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value) || 0

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Custom Amount</label>
        <input type="number" name="" id="" value={state.valueToAdd} onChange={handleChange} />
        <button>Submit</button>
        <p className="">Use negative number to subtract.</p>
      </form>
    </div>
  )
}

export default Counter
