import React from 'react';



// CLASS SETTING A STATE // //

class IncreaseClass extends React.Component {

  state  = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>Class element setting the state</h1>
        <button onClick = {()=> this.setState({ count: this.state.count + 1})}>increment</button>
        <button onClick = {()=> this.setState({ count: this.state.count - 1})}>decrement</button>
        {this.state.count}
      </div>

    );
  }
}

export default IncreaseClass;
