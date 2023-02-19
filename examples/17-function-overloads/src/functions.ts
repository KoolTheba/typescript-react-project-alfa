// EXAMPLES --------------------------------------------------
type callback = (result: number) => void;

function asyncAdd(a: number, b: number): Promise<number>;
function asyncAdd(a: number, b: number, fn: callback): void;
function asyncAdd(a: number, b: number, fn?: callback) {
  const result = a + b;
  if (fn) return fn(result);
  else return Promise.resolve(result);
}
// -----------------------------------------------------------

// make an add function that works with partial application
function add(a:number, b:number):number;
function add(a:number):(b: number) => number
function add(a:any, b?: any):number | ((b: number) => number) {
  if (b === undefined) return (b: any) => a + b;
  return a + b;
}

const five = add(2, 3);
const addTwo = add(2);
const seven = addTwo(5);
const ten = add(5)(5)

export { asyncAdd, add };
