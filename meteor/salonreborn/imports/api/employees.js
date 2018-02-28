import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Employees = new Mongo.Collection('employees');

if (Meteor.isServer) {
  Meteor.publish('employees', function employeesPublication() {
    return Employees.find();
  })
}

Meteor.methods({
  'employees.insert'(info) {
    const employee = {
      _id: Employees.find({}).count() + 1,
      name: info.name,
      role: info.role,
      percent: String(Number(info.percent)/100),
      monthlyProfit: '0',
      dailyProfit: '0'
    }
    Employees.insert(employee);
  },

  'employees.remove'(id) {
    Employees.remove({ _id: id });
  }
});
