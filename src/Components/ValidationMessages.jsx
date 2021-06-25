import React, { Component } from 'react'
import { ValidationContext } from '../Context/ValidationContext'

export default class ValidationMessages extends Component {
    static contextType = ValidationContext;

    render() {

        return this.context.getMessagesForField(this.props.field).map(msg =>
            <div className="bg-danger text-white mt-1 p-1 small">{msg}</div>)
    }

}
