import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (  
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          {/* {props.headtitle} */}
          Simple React Context API
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  headtitle: 'Learn React'
}
Header.propTypes = {
  headtitle: PT.string.isRequired
}
 
export default Header;
