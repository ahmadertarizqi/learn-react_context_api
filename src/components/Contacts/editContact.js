import React from 'react';
// import uuid from 'uuid';
import { Consumer } from '../../Context';
import TextInputGroup from '../Layouts/TextInputGroup';
import Axios from 'axios';

class EditContact extends React.Component {
  
  state = {  
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        // console.log(response.data)
        const contact = response.data;
        this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone
        })
      })
  }

  onSubmitHandler = (dispatch, ev ) => {
    ev.preventDefault();
    // console.log(this.state);
    const { name, email, phone } = this.state;

    // check validasi form
    if(name === '' || email === '' || phone === '') {
      this.setState({
        errors: { 
          name: 'Name is required!!',
          email: 'Email is required!!',
          phone: 'Phone is required!!',
        }
      })
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    }
    const { id } = this.props.match.params;
    Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then((response) => {
        dispatch({ type: 'UPDATE_CONTACT', payload: response.data });
        console.log(response.data);
      })

    // reset state form setelah di submit
    this.setState({
      name: '',
      email: '',
      phone: ''
    })

    this.props.history.push('/');
    alert('berhasil di Edit');
  }

  onChangeHandler = (ev) => {
    this.setState({ [ev.target.name] : ev.target.value })
  }

  render() { 
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)} >
                  <TextInputGroup 
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChangeHandler}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    type="phone"
                    name="phone"
                    value={phone}
                    onChange={this.onChangeHandler}
                    error={errors.phone}
                  />
                  <input type="submit" value="Update Contact" className="btn btn-primary btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
 
export default EditContact;