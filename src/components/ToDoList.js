import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    render() {
        const {itemsList,clearListItems,deleteItem,handleEdit} = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">to do list</h3>
                {itemsList.map((item)=>{
                    return <ToDoItem 
                    key={item.id}
                    title={item.title}
                    deleteItem={()=>deleteItem(item.id)}
                    handleEdit={()=>handleEdit(item.id)}/>
                })}
                
                <button type="button" 
                className="btn btn-block bg-danger my-3 text-capitalize  text-white"
                onClick={clearListItems}>clear list</button>
            </ul>
        )
    }
}
