import {useState} from 'react';
import './Application.css'

type CounterProps = {
  incident: string;
}

const Counter = ({incident}:CounterProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => console.log('Submitted!')}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" onChange={(event) => setCount(Number(event.target.value))} value={count} />
          <input type="submit" />
        </form>
      </section>
    </main>
  )
}

const Application = () => <Counter incident='Zero Day'/>

export default Application;
