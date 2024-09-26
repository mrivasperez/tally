import Counter from './features/Counter/Counter'
import './assets/index.css'
function App(): JSX.Element {
  return (
    <div id="window">
      <div className="title-bar" id="drag">
        <p className="title-bar__title">Tally</p>
        <button className="title-bar__button" onClick={() => window.close()} id="no-drag"></button>
      </div>

      <Counter initialCount={0} />
    </div>
  )
}

export default App
