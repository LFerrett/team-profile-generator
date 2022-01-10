const Employee = require("../lib/Employee");
const testEmployee = new Employee ("Lauren, 232323, lferrett@gmail.com");

describe('test to see if the Employee class returns name, id, and email', () => {
  expect(testEmployee.name).toBe("Lauren");
  expect(testEmployee.id).toBe("232323");
  expect(testEmployee.email).toBe("lferrett@gmail.com");
});

const Employee = require("../lib/Employee");

describe('test to see if getName() returns name', () => {
  expect(testEmployee.getName()).tobe("Lauren");
});

describe('test to see if getID() returns id', () => {
  expect(testEmployee.getID()).tobe("232323");
});

describe('test to see if getEmail() returns email', () => {
  expect(testEmployee.getEmail()).tobe("lferrett@gmail.com");
});

describe('test to see if getRole() returns role', () => {
  expect(testEmployee.getRole()).tobe("Employee");
});