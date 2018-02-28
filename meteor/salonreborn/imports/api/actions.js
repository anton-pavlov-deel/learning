import Dispatcher from './dispatcher.js';

class Actions {
  EmployeeSelectChange(event) {
    Dispatcher.dispatch({
      actionType: 'EMPLOYEE_SELECT_CHANGE',
      payload: event.target.value
    });
  }

  ShowAddEmployeeWindowChange() {
    Dispatcher.dispatch({
      actionType: 'SHOW_ADD_EMPLOYEE_WINDOW_CHANGE'
    });
  }

  AddEmployeeNameChange(event) {
    Dispatcher.dispatch({
      actionType: 'ADD_EMPLOYEE_NAME_CHANGE',
      payload: event.target.value
    });
  }

  AddEmployeePercentChange(event) {
    Dispatcher.dispatch({
      actionType: 'ADD_EMPLOYEE_PERCENT_CHANGE',
      payload: event.target.value
    });
  }

  AddEmployeeRoleChange(event) {
    Dispatcher.dispatch({
      actionType: 'ADD_EMPLOYEE_NAME_CHANGE',
      payload: event.target.value
    });
  }

  AddEmployee() {
    Dispatcher.dispatch({
      actionType: 'ADD_EMPLOYEE',
      payload: this.state
    })
  }
}

export default new Actions();
