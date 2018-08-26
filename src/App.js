import React, { Component } from 'react';
import Header from './components/layout/Header';
import CtrlForm from './components/forms/ctrl-form/CtrlForm';
import AddContactForm from './components/forms/add-contact-form/AddContactForm';
import Search from './components/search/Search';
import PhoneBookContacts from './components/phone-book-contacts/PhoneBookContacts';

import './vendors/css/normalize.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      optionsSort: ['', 'Town', 'Name'],
      matchesFound: [],
      name: '',
      phonenumber: '',
      address: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onAddNewContact = this.onAddNewContact.bind(this);
    this.onDeleteContact = this.onDeleteContact.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    fetch('http://www.mocky.io/v2/581335f71000004204abaf83')
      .then(res => res.json())
      .then(contacts => this.setState({
        data: contacts.contacts,
        isLoading: false
      }))
      .catch(error => alert(error));
  }

  onSearch(e) {
    const search = [];
    this.state.data.forEach(el => {
      if (el.name.toLowerCase().indexOf(e.target.value) > -1 && e.target.value !== '') {
        search.push(el);
      }
    });
    this.setState({ matchesFound: search });
  };

  onSort(e) {
    let sorted;
    if (e.target.value === 'name') {
      sorted = this.state.data.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      this.setState({ data: sorted });
    } else if (e.target.value === 'town') {
      sorted = this.state.data.sort((a, b) => {
        let nameA = a.address.split(',')[a.address.split(',').length - 2].toLowerCase();
        let nameB = b.address.split(',')[b.address.split(',').length - 2].toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      this.setState({ data: sorted });
    }
  }

  onAddNewContact(e) {
    e.preventDefault();
    const newContact = {
      phone_number: this.state.phonenumber,
      name: this.state.name,
      address: this.state.address
    };
    this.setState({ data: this.state.data.concat(newContact) });
  }

  onDeleteContact(item) {
    const contacts = this.state.data;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].phone_number === item.phone_number) {
        contacts.splice(i, 1);
      };
    };
    this.setState({ data: contacts });
  }


  onHandleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header>
          <CtrlForm onSort={this.onSort} onSearch={this.onSearch} options={this.state.optionsSort} />
          <AddContactForm onHandleChange={this.onHandleChange} onAddNewContact={this.onAddNewContact} />
        </ Header>
        {this.state.matchesFound.length !== 0 ? <Search matches={this.state.matchesFound} /> : null}
        <PhoneBookContacts onDeleteContact={this.onDeleteContact} contacts={this.state.data} />
      </div>
    );
  }
}

export default App;
