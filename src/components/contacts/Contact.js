import React from "react";
import PropTypes from "prop-types";

import Icons from "../Icons";
const Contact = (props) => {
  let contactInfo = (
    <ul className="list-group">
      <li className="list-group-item">Email: {props.email}</li>
      <li className="list-group-item">Phone: {props.phone}</li>
    </ul>
  );

  if (!props.contactInfo) contactInfo = null;

  return (
    <div className="card card-body mb-3">
      <h4>
        {props.name}
        <Icons
          showDetails={props.showDetails}
          deleteContact={props.deleteContact}
          updateContact={props.updateContact}
          deleteIcon={true}
        />
      </h4>
      {contactInfo}
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
