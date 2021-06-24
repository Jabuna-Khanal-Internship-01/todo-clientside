import React, { Component } from 'react'
import Title from './Title';
import Header from './Header';
import Container from './Container';
import Calender from './Calender';
import * as toDoServices from "../service/api"


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toDos: [],
      date: '',

    };
  }

  componentDidMount() {
    this.getToDo();
  }

  handleValueChange = (newValue) => {
    this.setState({ toDos: newValue });
  }


  // deleteItem =(item) =>{
  //   let newToDos=this.state.toDos.filter((toDo) =>{
  //     return toDo !== item;
  //   });
  //   // console.log("hello ==",item);
  //   console.log(newToDos,'-----------');
  //   this.setState({toDos:newToDos});

  // }


  getToDo = async () => {
    try {
      let data = await toDoServices.createApiCalls();
      console.log(data.data, '-----');
      this.setState({ toDos: data.data })
    } catch (error) {
      console.log(error.message);
    }
  }


  deleteItem = async (_id) => {
    try {
      let data = await toDoServices.deleteApiCalls(_id)
      console.log('test')
      this.getToDo();

    } catch (error) {
      console.log(error.message);
    }
  }

  // slectedDate = () => {

  // }


  // editItem=(oldValue,newValue) =>{
  //   let newToDos =this.state.toDos.map((toDo) =>{
  //     if(toDo===oldValue){
  //       return newValue;
  //     }else{
  //       return toDo;
  //     }

  //   });

  //   this.setState({toDos:newToDos});

  // }


  render() {
    return (
      <div className="to-do">

        <Title />
        <Header
          handleAddItem={this.handleValueChange}
        />
        <Container
          toDos={this.state.toDos}
          deleteItem={this.deleteItem}
        // editItem={this.editItem}
        />
      </div>
    )
  }
}
