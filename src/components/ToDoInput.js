import React, { Component } from 'react'

export default class ToDoInput extends Component {
    render() {
        const { input, handleChange, handleSubmit,isEditable } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text"
                            placeholder="add to do list"
                            className="form-control text-capitalize"
                            value={input}
                            onChange={handleChange} />
                    </div>
                    <button type="submit"
                        className={isEditable ? "btn btn-block bg-success mt-3 text-white text-capitalize"
                                              : "btn btn-block bg-primary mt-3 text-white text-capitalize"}>
                       {isEditable ? "edit item" :"add item"} 
                    </button>
                </form>
            </div>
        )
    }
}
