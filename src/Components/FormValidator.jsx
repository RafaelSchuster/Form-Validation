import React, { Component } from 'react'
import { ValidationContext } from '../Context/ValidationContext'
import Validation from './Validation'

export default class FormValidator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            dirty: {},
            formSubmitted: false,
            getMessagesForField: this.getMessagesForField
        }
    }

    handleChange = (e) => {
        this.setState(state => state.dirty[e.target.name] = true)
    }

    getMessagesForField = (field) => {
        return (this.state.formSubmitted || this.state.dirty[field] ? this.state.errors[field] || [] : [])
    }

    formValid = () => {
        return Object.keys(this.state.errors).length === 0
    }

    handleClick = () => {
        this.setState({ formSubmitted: true }, () => {
            if (this.formValid) this.props.onSubmit(this.props.data)
        })
    }

    static getDerivedStateFromProps(props, state) {
        return { errors: Validation(props.data, props.rules) }
    }

    render() {
        return (
            <div>
                <ValidationContext.Provider value={this.state}>
                    <div onChange={this.handleChange}>
                        {this.props.children}
                    </div>
                </ValidationContext.Provider>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
