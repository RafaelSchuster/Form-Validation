import React, { Component } from 'react';
import './App.css';
import AccountProfile from './Components/Form';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {}
    }
  }

  onSubmit = (newData) => {
    this.setState({ formData: newData })
  }
  render() {
    return (
      <div>
        <AccountProfile onSubmit={this.onSubmit} />
      </div>
    )
  }
}
