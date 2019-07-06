import React, { Component } from 'react';
import Axios from 'axios';

const Context = React.createContext();

const Reducer = (state, action) => {
   switch(action.type) {
      case 'DELETE_CONTACT':
         return {
            ...state,
            allContacts: state.allContacts.filter((contact) => contact.id !== action.payload)
         }
      case 'ADD_CONTACT':
         return {
            ...state,
            allContacts: [action.payload, ...state.allContacts]
         }
      case 'UPDATE_CONTACT':
         return {
            ...state,
            allContacts: state.allContacts.map((contact) => {
               if (contact.id === action.payload.id) {
                  return contact = action.payload
               } else {
                  return contact
               }
            })
         }   
      default:
         return state;
   }
}


export class Provider extends Component {
   state = {
      allContacts: [],
      
      // menjalankan atau mengirimkan action
      dispatch: action => {
         this.setState(state => Reducer(state, action))
      }
   }

   componentDidMount() {
      Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            // console.log(response.data)
            this.setState({ allContacts: response.data })
         })
         .catch((error) => {
            console.log(error)
         })
   }

   render() { 
      return (  
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}

export const Consumer = Context.Consumer;