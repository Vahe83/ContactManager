import React, { Fragment } from "react";
import axios from "axios";

import { Consumer } from "../Context";
import Contact from "./Contact";

const Contacts = (props) => {
  const onDeleteContact = (dispatch, id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id + 1}`)
      .then((response) => dispatch({ type: "DELETE_CONTACT", id: id }))
      .catch((error) => dispatch({ type: "DELETE_CONTACT", id: id }));
  };

  const onShowDetails = (dispatch, id) => {
    dispatch({ type: "SHOW_DETAIL", id: id });
  };

  const onUpdateContact = (contact, index) => {
    props.history.push("/contact/update/" + (index + 1), { ...contact });
  };

  return (
    <Fragment>
      <h1>Contact List</h1>
      <Consumer>
        {(context) =>
          context.contacts.map((contact, index) => (
            <Contact
              key={index}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              contactInfo={contact.showContactInfo}
              showDetails={() => onShowDetails(context.dispatch, index)}
              deleteContact={() => onDeleteContact(context.dispatch, index)}
              updateContact={() =>
                onUpdateContact(context.contacts[index], index)
              }
            />
          ))
        }
      </Consumer>
    </Fragment>
  );
};

export default Contacts;
