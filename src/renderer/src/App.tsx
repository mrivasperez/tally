import Counter from './Counter/Counter'

function App(): JSX.Element {
  return (
    <>
      <h1>Tally</h1>
      <Counter initialCount={0} />
    </>
  )
}

export default App
