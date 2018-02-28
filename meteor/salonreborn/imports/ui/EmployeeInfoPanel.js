import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dispatcher from '../api/dispatcher.js';
import Actions from '../api/actions.js';

export default class EmployeeInfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeId: '0',
      showAddWindow: false
    };

    Dispatcher.register(action => {
      switch(action.actionType) {
        case 'EMPLOYEE_SELECT_CHANGE':
          this.setState({
            employeeId: action.payload
          });
          break;
        case 'SHOW_ADD_EMPLOYEE_WINDOW_CHANGE':
          this.setState({
            showAddWindow: !this.state.showAddWindow
          });
          break;
      }
    });
  }

  render() {
    const employeesNames = {};
    let currentEmployee;
    this.props.employees.forEach(employee => {
      if (employee._id === this.state.employeeId) {
        currentEmployee = employee;
      }
      employeesNames[employee._id] = employee.name;
    });

    return (
      <div id='employee-info-panel-div'>
        <header>
          <h2>Сотрудник</h2>
          <input
            type='image'
            src='images/add_icon.png'
            onClick={Actions.ShowAddEmployeeWindowChange.bind(this)}
          />
        </header>
        {this.state.showAddWindow && <AddEmployeeWindow />}
        <EmployeeSelect employees={employeesNames}/>
        <EmployeeInfo employee={currentEmployee}/>
      </div>
    );
  }
}


class EmployeeSelect extends Component {
  render() {
    const employees = this.props.employees;
    const options = [];
    let selectedOne = null;

    for (let id in employees) {
      if (selectedOne) {
        options.push(
          <option value={id} key={id}>{employees[id]}</option>
        );
      } else {
        options.push(
          <option value={id} key={id} selected>{employees[id]}</option>
        );
        selectedOne=id;
      }
    }

    return (
      <select
        id='employee-select'
        onChange={Actions.EmployeeSelectChange.bind(this)}>
        {options}
      </select>
    );
  }
}


class EmployeeInfo extends Component {
  render() {
    const employee = this.props.employee;

    if (employee) {
      return (
        <table id='employee-info-table'>
          <tbody>
            <tr>
              <th align='left'>Должность: </th><td align='right'>{employee.role}</td>
            </tr>
            <tr>
              <th align='left'>Процентная ставка: </th><td align='right'>{employee.percent}</td>
            </tr>
            <tr>
              <th align='left'>Заработок(месяц): </th><td align='right'>{employee.monthlyProfit}</td>
            </tr>
            <tr>
              <th align='left'>Заработок(день): </th><td align='right'>{employee.dailyProfit}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  }
}


class AddEmployeeWindow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      role: '',
    }

    Dispatcher.register(action => {
      switch(action.actionType) {
        case 'ADD_EMPLOYEE_NAME_CHANGE':
          this.setState({
            name: action.payload
          });
          break;
        case 'ADD_EMPLOYEE_ROLE_CHANGE':
          this.setState({
            role: action.payload
          });
          break;
        case 'ADD_EMPLOYEE_PERCENT_CHANGE':
          this.setState({
            percent: action.payload
          });
      }
    });
  }

  render() {
    return (
      <div
        id='add-employee-window-div'
        align='center'
        vertical-align='center'
        >
          <div id='add-employee-form'>
            <header>
              <h2>Добавить нового сотрудника</h2>
              <input
                type='image'
                src='images/add_icon.png'
                onClick={Actions.ShowAddEmployeeWindowChange.bind(this)}
              />
            </header>
            <table>
              <tbody>
                <tr>
                  <th>Ф.И.О.:</th>
                  <td><input type='text' required
                    onChange={Actions.AddEmployeeNameChange.bind(this)}
                  /></td>
                </tr>
                <tr>
                  <th>Должность: </th>
                  <td><input type='text' required
                    onChange={Actions.AddEmployeeRoleChange.bind(this)}
                  /></td>
                </tr>
                <tr>
                  <th>Процентная ставка(0 - 100): </th>
                  <td><input type='text' required
                    onChange={Actions.AddEmployeePercentChange.bind(this)}
                  /></td>
                </tr>
              </tbody>
            </table><br/>
            <input
              type='button'
              value='ДОБАВИТЬ'
              onClick={Actions.AddEmployee.bind(this)}
            />
          </div>
      </div>
    );
  }
}
