//context.js will hold application level state

import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT": {
      return {
        //spread
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      break;
    }

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Luis Figo",
        email: "figo@gmail.com",
        phone: "10"
      },
      {
        id: 2,
        name: "Zinedine Zidane",
        email: "Zidane@gmail.com",
        phone: "05"
      },
      {
        id: 3,
        name: "Raul Gonzales",
        email: "raul@gmail.com",
        phone: "07"
      }
    ],
    dispatch: (action, index) => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      //Using Provider to provide state value
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
