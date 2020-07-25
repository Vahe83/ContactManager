import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      let newContacts = [...state.contacts];
      let getContact = newContacts[action.id];
      let updateContactInfo = !getContact.showContactInfo;
      getContact.showContactInfo = updateContactInfo;
      newContacts[action.id] = getContact;
      return {
        contacts: newContacts,
      };

    case "DELETE_CONTACT":
      let getNewContacts = [...state.contacts];
      getNewContacts.splice(action.id, 1);
      return {
        contacts: getNewContacts,
      };
    case "ADD_CONTACT":
      let takeNewContacts = [...state.contacts];
      takeNewContacts.push(action.value);
      return {
        contacts: takeNewContacts,
      };
    case "UPDATE_CONTACT":
      let updateContacts = [...state.contacts];
      updateContacts.splice(action.id - 1, 1, action.value);
      return {
        contacts: updateContacts,
      };

    default:
      return state;
  }
};

/*action.value =
{
  name: 'John Doe',
  email: 'jdoe@gmail.com',
  phone: '555-555-5555',
  showContactInfo: true
}*/

export class Provider extends Component {
  state = {
    contacts: [],
  };

  dispatch = (action) => {
    this.setState((state) => reducer(state, action));
  };

  /*componentDidMount()
    {
      axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({contacts: response.data}))
            .catch(error => console.log(error));
    }*/

  async componentDidMount() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.setState({ contacts: response.data });
  }

  render() {
    return (
      <Context.Provider
        value={{ contacts: this.state.contacts, dispatch: this.dispatch }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
