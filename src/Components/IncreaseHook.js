import React, { useState} from 'react';


// First Example: state nest a number

// Using Hooks, a class is not needed to set a state, which means that it is faster to render.
// The hook is always setted like this: two arguments.
// First: a variable (which is the state and which is used in the UI).
// Second: a function: This function changes the state, in this case, the counter.
// It is called as an event in the button.
// the useState declares the default or initial value. Usually it is 0, or empty object


const IncreaseHook = () => {

  const [count, setCount] = useState(0) 

  return (
    <div className="App">
      <h1>Testing Hooks setting the state as a primitive value</h1>
      <header className="App-header">
        <button onClick = {() => setCount( count + 1)}>increment</button>
        <button onClick = {() => setCount( count - 1)}>dicrement</button> 
        {count}
      </header>
    </div>
  );
}

export default IncreaseHook;