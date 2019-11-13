import React, { useState} from 'react';
import uuid from 'uuid';


// Second example 

// In this second example, instead of a simple number value, we set an array in the state.
// for that we need two hooks which are connected. The array hook store the values, and the value one, pass the values.
// ATTENTION: each hook has different state and only the array store values. The second one change the value each time it is called
// when the array hook is called, it expects two arguments, the spread array as first argument,
// and the first argument of the second hook, which is always a primary type of data (ex. number, string, boolean)

// take care: first input value: "{first}" cleans the placeholder after it is submited.
// this value has already been setted in the onSebmitForm function.
// then, the eventlistener is the single hook(first)

// we need uuid.v4() to set the keys of the elements which is very important in React
// install it using npm i uuid and remember to import it!

// Last but not least, take a look at the mapping array function, tipically used in React.
// It allows us to display a component(html element), mapping an array.
// which means that {} works as vanilla.js but it always return a string. in this case <div> ...
// Remember the keys

const ArrayHook = () => {
    const [array, setArray] = useState([]);
    const [first, setFirst] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault()
        setArray([...array, first])
        setFirst("")
    }
    return (
        <div className="App">
            <h1>Testing Hooks setting the state in an array</h1>
            <header className="App-header">
                <form onSubmit={onSubmitForm}>
                    <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
                    <button type="submit">addItems</button>
                    {array && array.map(item => <p key={uuid.v4()}>{item}</p>)}
                </form>
            </header>
        </div>
    );
}

export default ArrayHook;