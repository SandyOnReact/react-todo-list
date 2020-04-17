import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

//importing bootstrap in react
import 'bootstrap/dist/css/bootstrap.min.css';

//importing uuid in react
import uuid from 'uuid/v1';

class App extends Component {
  state = {
    input: '',
    itemsArray: [],
    id: uuid(),
    isEditable: false
  }

  handleTextChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //Add the item in the array with uuid
    const updatedItemsArray = [...this.state.itemsArray];

    let newObject = {
      "title": this.state.input,
      "id": uuid(),
    }
    updatedItemsArray.push(newObject);
    this.setState({
      itemsArray: updatedItemsArray,
      input: ''
    })
  }

  clearListItems = () => {
    this.setState({
      itemsArray: [],
      input: ''
    })
  }

  handleDeleteItem = (index) => {
    let updatedItemsArray = [...this.state.itemsArray];
    updatedItemsArray = updatedItemsArray.filter((value)=>{
      return value.id !==index;
    })
    this.setState({itemsArray:updatedItemsArray})
  }

  handleEditItem = (id)=>{
    let updatedItemsArray = [...this.state.itemsArray];

    updatedItemsArray = updatedItemsArray.filter((value)=>{
      return value.id !== id;
    })

    let selectedItem = this.state.itemsArray.find((value)=>{
      return value.id === id;
    })

    console.log("selected item is ",selectedItem);


    this.setState({
      itemsArray:updatedItemsArray,
      input:selectedItem.title,
      isEditable:true
    })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-3">
            <h3 className="text-capitalize text-center">
              todo Input
            </h3>
            <ToDoInput input={this.state.input}
              handleChange={this.handleTextChange}
              handleSubmit={this.handleSubmit} 
              isEditable={this.state.isEditable}/>

            <ToDoList
              itemsList={this.state.itemsArray}
              clearListItems={this.clearListItems}
              deleteItem={this.handleDeleteItem} 
              handleEdit={this.handleEditItem}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
