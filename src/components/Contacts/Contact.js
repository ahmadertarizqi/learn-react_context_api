import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Consumer } from '../../Context';

import './contact.css';

class Contact extends React.Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id, dispatch) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        alert('berhasil di hapus')
        dispatch({ type: 'DELETE_CONTACT', payload:id });
        console.log(response + 'Delete Working');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  render() {
    // console.log(this.props)

    const {id, name, email, phone} = this.props
    const { showContactInfo } = this.state

    return (  
      <Consumer>
        {value => {
          const { dispatch } = value
          // console.log(dispatch)

          return (
            <div className="card card-body mb-3">
              <h5 className="c-name"> {name}  
                <div style={{float: 'right'}}>
                  <span className="csr-pointer" onClick={this.onShowClick}>
                    <i className="icon ion-md-arrow-dropdown"></i>
                  </span>
                  <Link to={`/contact/edit/${id}`} className="a_csr-pointer">
                    <span className="csr-pointer" style={{color: 'black'}}>
                      <i className="icon ion-md-create"></i>
                    </span>
                  </Link>
                  <span className="csr-pointer" 
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  >
                    <i className="icon ion-md-trash"></i>
                  </span>
                </div>
              </h5>

              { showContactInfo ? (
                <ul className="list-group"> 
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Telfon: {phone} </li>
                </ul>
                ) : null
              }
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PT.string.isRequired,
  email: PT.string.isRequired,
  phone: PT.string.isRequired
};
 
export default Contact;