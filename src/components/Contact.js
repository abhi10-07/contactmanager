import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
    arrowIcon: "down"
  };

  //using arrow function, we do not need to bind the function
  onShowClick = e => {
    // console.log(e.target);
    this.setState({
      showContactInfo: !this.state.showContactInfo,
      arrowIcon: this.state.arrowIcon !== "down" ? "down" : "up"
    });
  };

  //this will help in changin state from this(another) component.
  /* onDeleteClick = () => {
    this.props.deleteClickHandler();
  }; */

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    // destructuring
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo, arrowIcon } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className={"fas fa-sort-" + arrowIcon}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times float-right text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  //if props are sent individually
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
  //if props are sent in object
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
