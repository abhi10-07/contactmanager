import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };

  //delete function to delete selected id and change the state
  deleteContact = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter((contact, index) => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            //Sent individually
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}

            //Sent in object
            contact={contact}
            //creating a handler which call defined delete function
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
