import React, {ChangeEvent, Component} from 'react';
import './Application.css'

type CounterProps = {
  incident: string;
}

type CounterState = {
  count: number;
}

class Counter extends Component<CounterProps, CounterState>{
  state:CounterState = {
    count: 0
  }

  handleIncrement(){
    this.setState({count: this.state.count +1})
  }

  handleDecrement(){
    this.setState({count: this.state.count -1})
  }

  handleReset(){
    this.setState({count: 0})
  }

  handleCountManually(event: ChangeEvent<HTMLInputElement>){
    this.setState({count: Number(event.target.value)})
  }

  render(){
    const {incident} = this.props;
    const {count} = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => this.handleIncrement()}>Increment</button>
          <button onClick={() => this.handleReset()}>Reset</button>
          <button onClick={() => this.handleDecrement()}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => console.log('Submitted!')}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" onChange={(ev) => this.handleCountManually(ev)} value={count} />
            <input type="submit" />
          </form>
        </section>
      </main>
    )
  }
}

class Application extends Component {
  render(){
    return (
      <Counter incident='Zero Day'/>
    )
  }
};

export default Application;
