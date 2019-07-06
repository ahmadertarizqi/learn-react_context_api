import React from 'react';
import { Link } from 'react-router-dom';

import Contact from './Contact';
import { Consumer } from '../../Context';

class allContacts extends React.Component {

  // deleteContact = (id) => {
  //   // console.log(id);
  //   // console.log(this.state)
  //   const { allContacts } = this.state;
  //   const contactBaru = allContacts.filter(contact => contact.id !== id )
  //   this.setState({
  //     allContacts: contactBaru
  //   })
  // }

  // state pertama kali di inisialisasikan

  render() {
    return (  
      <Consumer>
        {value => {

          const { allContacts } = value
          return (
            <React.Fragment>
              <div className="d-flex justify-content-end">
                <Link to="/contact/add" className="btn btn-primary">
                  <i className="icon ion-md-add"></i> Add Data
                </Link>
              </div>
              <hr/>
              {allContacts.map((contact, index) => (
                <Contact 
                  key={index} id={contact.id} 
                  name={contact.name} 
                  email={contact.email} 
                  phone={contact.phone}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}
 
export default allContacts;