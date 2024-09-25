import React, { useState } from 'react'

interface CounterProps {
  initialCount: number
}

const Counter = ({ initialCount }: CounterProps): JSX.Element => {
  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)

  const handleIncrement = (): void => setCount(count + 1)
  const handleDecrement = (): void => setCount(count - 1)

  const handleAddCustomValue = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setCount(count + valueToAdd)
    setValueToAdd(0)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <form action="" onSubmit={handleAddCustomValue}>
        <label htmlFor="">Custom Amount</label>
        <input
          type="number"
          name=""
          id=""
          value={valueToAdd}
          onChange={(e) => setValueToAdd(Number(e.target.value))}
        />
        <button>Submit</button>
        <p className="">Use negative number to subtract.</p>
      </form>
    </div>
  )
}

export default Counter
