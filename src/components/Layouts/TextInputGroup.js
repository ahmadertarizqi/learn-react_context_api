import React from 'react';
import PT from 'prop-types';

const TextInputGroup = ({label, type, name, value, onChange, error}) => {
  return (  
    <div className="form-group">
      <label>{label}</label>
      <input type={type} name={name} 
        className={error ? "is-invalid form-control" : "form-control"} 
        value={value}
        onChange={onChange}
      />
      {error && 
        <div className="invalid-feedback"> {error} </div>
      }
      
    </div>
  );
}

TextInputGroup.propTypes = {
  label: PT.string.isRequired,
  type: PT.string.isRequired,
  name: PT.string.isRequired,
  value: PT.string.isRequired,
  onChange: PT.func.isRequired,
  error: PT.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}
 
export default TextInputGroup;