import React, { useState, useEffect } from './node_modules/react';


// // The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
// // It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes,
// // but unified into a single API. (We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)

// When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.
// Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render

const UseEffectHook = () => {

    const [incrementCounter, setIncrement] = useState(0);
    const [decrementCounter, setDecrement] = useState(1);

    const increment = () => {
        setIncrement(incrementCounter + 1);
        console.log("+1");
        
    };

    const decrement = () => {
        setTimeout(() => { console.log("-1");
            setDecrement(decrementCounter - 1)}, 1000)  
    };
    
    // print the message each time the incrementCounter or decrement changes
    useEffect(() => {
        console.log("increment");
    }, [incrementCounter]);
    useEffect(() => {
        console.log("decrement");
    }, [decrementCounter]);

    // middleware function 

    // do something (decrementCounter) each time incrementCounter changes
    // to fixed the first initial default call, let's set the dafault value of decrement in 1.
    useEffect(() => {
        setDecrement(decrementCounter - 1)
    }, [incrementCounter]);

     // Only one time, used for fetching, each time the web is refreshed
     useEffect(() => {
        console.log("onlyOneTime");
    }, []);


    // always displays but at the end. each time something change, 
    // so after React updates the DOM:
    useEffect(() => {
        console.log("always");
    });


    return (
        <div>
            <h1>Testing useEffects Hooks</h1>
            <h1>{incrementCounter}</h1>
            <button onClick={increment}>increment</button>
            <h1>{decrementCounter}</h1>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}


export default UseEffectHook;