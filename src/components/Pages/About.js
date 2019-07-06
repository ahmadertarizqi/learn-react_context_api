import React from 'react';

const About = (props) => {
  return (  
    <div>
      <h3>This Match Params Route [ {props.match.params.id} ]</h3>
    </div>
  );
}
 
export default About;