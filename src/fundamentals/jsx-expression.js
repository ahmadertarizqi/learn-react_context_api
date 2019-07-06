import React from 'react';

class JsxExpression extends React.Component {
  render() {
    const name = 'Rizk';
    const showHello = true;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if(showMath) {
      math = <h4> {num1} + {num2} = {num1 + num2} </h4>
    } else {
      math = null;
    }
    
    return ( 
      <div>
        <h2>JSX - Expressions</h2>
        { showHello ? <h4>Hello {name.toLowerCase()} </h4> : null }
        {math}
      </div>
    );
  }
}
 
export default JsxExpression;