import React from 'react';
import Axios from 'axios';
import { Consumer } from '../../Context';
import TextInputGroup from '../Layouts/TextInputGroup';

class AddContact extends React.Component {
  
  state = {  
    name: '',
    email: '',
    phone: '',
    errors: {}
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

    const newContact = {
      name,
      email,
      phone
    }

    Axios.post(`https://jsonplaceholder.typicode.com/users`, newContact )
      .then((response) => {
        dispatch({ type:'ADD_CONTACT', payload: response.data })
        console.log(response.data)
      })

    // reset state form setelah di submit
    this.setState({
      name: '',
      email: '',
      phone: ''
    })

    this.props.history.push('/');
    alert('berhasil ditambahkan');
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
              <div className="card-header">Add Contact</div>
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
                  <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
 
export default AddContact;
