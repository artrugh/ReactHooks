import React, { useState, useEffect } from 'react';


// // The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
// // It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes,
// // but unified into a single API. (We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)

const UseEffectHook = () => {

    const [incrementCounter, setIncrement] = useState(0);
    const [decrementCounter, setDecrement] = useState(1);

    const increment = () => {
        setIncrement(incrementCounter + 1);
    };

    const decrement = () => {
        setDecrement(decrementCounter - 1)
    };

    // Only one time, used for fetching, each time the web is refreshed
    useEffect(() => {
        console.log("onlyOneTime");
    }, []);

    // always displays but at the end. each time something change
    useEffect(() => {
        console.log("always");
    });

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