import React, { Component } from 'react'
import Calender from './Calender'
import * as toDoServices from "../service/api"



export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toDos: [],
      date: '',
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  
  handleSubmit = (event) => {
    try {
      toDoServices.saveTodoApiCalls({toDoText: this.state.value});
    } catch (error) {
      console.log(error);
    }
    event.preventDefault();
    this.setState({ toDos: [...this.state.toDos, this.state.value],value:''}, () => {
    this.props.handleAddItem(this.state.toDos)
  });
  }

  render() {
    return(
      <form onSubmit = { this.handleSubmit } >
        <div className="addBar" >
          <div className="addBar__wrapper">
            <input type="text" placeholder="Add more.." className="addBar__wrapper__left" value={this.state.value} onChange={this.handleChange} />
            <div className="addBar__wrapper__right">
              <div className="calendar">
                {/* <Calender selectedDate={this.props.selectedDate} /> */}
              </div>
              <input type="submit" value="Add" />
            </div>
          </div>
        </div>
      </form>
    )
  }
}
