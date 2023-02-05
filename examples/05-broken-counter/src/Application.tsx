import { useEffect, useState } from 'react';
import './Application.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // solved by adding curly braces, as useEffect is expenting a function signature
    setTimeout(() => setCount(count + 1), 1000)
  }, [count]);

  return <main>{count}</main>;
};

const Application = () => <Counter />;

export default Application;
