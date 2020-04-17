import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex
            justify-content-between my-2">
                <h6>{this.props.title}</h6>
                <div className="to-do-icons">
                    <span className="mx-2 text-success"
                    onClick={this.props.handleEdit}>
                    <i className="fas fa-pen"></i> 
                    </span>

                    <span className="mx-2 text-danger"
                    onClick={this.props.deleteItem}>
                    <i className="fas fa-trash"></i> 
                    </span>
                </div>
            </li>
        )
    }
}
