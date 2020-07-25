import React, { Component, Fragment } from "react";
import axios from "axios";

import { Consumer } from "../Context";
import Icons from "../Icons";
import Input from "../Input";

class AddContact extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      phone: "",
      showContactInfo: true,
    },
    showAddContact: true,
    errors: {
      name: true,
      email: true,
      phone: true,
    },
    loading: false,
  };

  showContactField = () => {
    this.setState({ showAddContact: !this.state.showAddContact });
  };

  onSubmitHandler = (event, dispatch) => {
    event.preventDefault();
    let newErrors = { ...this.state.errors };

    for (let key in newErrors) {
      if (this.state.contact[key] === "") {
        newErrors[key] = false;
        this.setState({ errors: newErrors });
        return;
      }
    }

    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state.contact)
      .then((response) => {
        dispatch({ type: "ADD_CONTACT", value: { ...this.state.contact } });
      });

    this.setInput({ target: { name: "ADD_CONTACT" } });
    this.props.history.push("/");
  };

  setInput = (event) => {
    switch (event.target.name) {
      case "name":
        let newContact_1 = { ...this.state.contact };
        newContact_1.name = event.target.value;

        let newErrors_1 = { ...this.state.errors };
        newErrors_1.name = true;

        this.setState({ contact: newContact_1, errors: newErrors_1 });
        break;
      case "email":
        let newContact_2 = { ...this.state.contact };
        newContact_2.email = event.target.value;

        let newErrors_2 = { ...this.state.errors };
        newErrors_2.email = true;

        this.setState({ contact: newContact_2, errors: newErrors_2 });
        break;
      case "phone":
        let newContact_3 = { ...this.state.contact };
        newContact_3.phone = event.target.value;

        let newErrors_3 = { ...this.state.errors };
        newErrors_3.phone = true;

        this.setState({ contact: newContact_3, errors: newErrors_3 });
        break;
      default:
        let newContact_4 = { ...this.state.contact };
        newContact_4.name = "";
        newContact_4.email = "";
        newContact_4.phone = "";
        this.setState({ contact: newContact_4 });
    }
  };

  render() {
    let showField = (
      <Fragment>
        <Input
          type="text"
          name="name"
          value={this.state.contact.name}
          placeholder="Enter Name..."
          onChangeInput={this.setInput}
          error={this.state.errors.name}
        />

        <Input
          type="email"
          name="email"
          value={this.state.contact.email}
          placeholder="Enter Email..."
          onChangeInput={this.setInput}
          error={this.state.errors.email}
        />

        <Input
          type="tel"
          name="phone"
          value={this.state.contact.phone}
          placeholder="Enter Phone number..."
          onChangeInput={this.setInput}
          error={this.state.errors.phone}
        />

        <button className="btn btn-success btn-block">Add Contact</button>
      </Fragment>
    );

    if (!this.state.showAddContact) showField = null;

    return (
      <Consumer>
        {(context) => (
          <div className="card mb-3">
            <div className="card-header">
              Add Contact
              <Icons showDetails={this.showContactField} deleteIcon={false} />
            </div>
            <div className="card-body">
              <form
                onSubmit={(event) =>
                  this.onSubmitHandler(event, context.dispatch)
                }
              >
                {showField}
              </form>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default AddContact;
