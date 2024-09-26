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
    <div className="counter" id="drag">
      <div className="counter__container">
        <div className="counter__container__count">{state.count}</div>
        <div className="counter__container__actions" id="no-drag">
          <button onClick={handleIncrement} className="counter__container__actions__increment">
            +
          </button>
          <button onClick={handleDecrement} className="counter__container__actions__decrement">
            -
          </button>
        </div>
      </div>

      <form action="" onSubmit={handleSubmit} className="counter__form" id="no-drag">
        <label htmlFor="">Custom Amount</label>
        <input type="number" name="" id="" value={state.valueToAdd} onChange={handleChange} />
        <button>↪</button>
        <p className="">Use negative number to subtract.</p>
      </form>
    </div>
  )
}

export default Counter
