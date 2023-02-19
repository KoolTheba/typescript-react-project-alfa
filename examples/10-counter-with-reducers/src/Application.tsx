import {useReducer} from 'react';
import './Application.css'

type CounterProps = {
  incident: string;
}

type CounterState = {
  count: number
}

type BasicCounterAction = {
  type: 'INCREMENT_COUNTER' | 'DECREMENT_COUNTER' ;
}

type SetCounterAction = {
  type: 'RESET_COUNTER' | 'SELECT_COUNTER';
  payload: number;
}

type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CounterState, action: CounterAction) => {
  if(action.type === 'INCREMENT_COUNTER'){
    return {
      count: state.count + 1
    }
  }

  if(action.type === 'DECREMENT_COUNTER'){
    return {
      count: state.count - 1
    }
  }

  if(action.type === 'RESET_COUNTER'){
    return {
      count: action.payload
    }
  }

  if(action.type === 'SELECT_COUNTER'){
    return {
      count: action.payload
    }
  }
  return state
}

const Counter = ({incident}:CounterProps) => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  
  return (
    <main className="Counter">
      <h1>Days since last {incident}</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={() => dispatch({type: 'INCREMENT_COUNTER'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT_COUNTER'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'RESET_COUNTER', payload: 0})}>Reset</button>
      </section>
      <section className="controls">
        <form onSubmit={() => console.log('Submitted!')}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" onChange={(event) => dispatch({type: 'SELECT_COUNTER', payload: +event.target.value})} value={state.count} />
          <input type="submit" />
        </form>
      </section>
    </main>
  )
}

const Application = () => {
  return (
    <Counter incident='Pizza'/>
  )
};

export default Application;
