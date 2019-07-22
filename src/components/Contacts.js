import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  //delete function to delete selected id and change the state
  /* deleteContact = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter((contact, index) => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  }; */

  render() {
    return (
      //Using Consumer to consume the context value
      <Consumer>
        {value => {
          const { contacts } = value;
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
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    /* const { contacts } = this.state;
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
    ); */
  }
}

export default Contacts;
