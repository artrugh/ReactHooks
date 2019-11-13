import React, { useState} from 'react';
import uuid from 'uuid';

// Third example

// Now is time to set an Object in the state.
// For that we need three hooks: 1. the state. 2.the key. 3.the values.
// of course, if we want to set each keys we need two imputs (each type = "text")
// the already used onSubmitFormfunction where the 1 hook is called passing the spreed obj, 
// as well as the key and value as second argument

const ObjHook = () => {

  const [obj, setObj] = useState([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault()
    setObj([...obj, { [key]: value }])
    setKey("")
    setValue("")
  }

  // MAPPING THE OBJ getting keys and values
  const keys = obj.map(item => Object.keys(item));
  const values = obj.map(item => Object.values(item));

  return (

    <div className="App">
      <h1>Testing Hooks setting the state in an object</h1>
      <header className="App-header">

        <form onSubmit={onSubmitForm}>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">addItems</button>
          {obj.map((item, i) => <p key={uuid.v4()}>{keys[i][0]}:{values[i][0]}</p>)}
        </form>
      </header>
    </div>
  );
}

export default ObjHook;