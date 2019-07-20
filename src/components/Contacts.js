import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
