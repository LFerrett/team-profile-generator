const Employee = require("../lib/Employee.js");
const testEmployee = new Employee("Lauren, 232323, lferrett@gmail.com");

describe("Employee", () => {
  it("test to see if the Employee class returns name, id, and email", () => {
    expect(testEmployee.name).toBe("Lauren");
    expect(testEmployee.id).toBe("232323");
    expect(testEmployee.email).toBe("lferrett@gmail.com");
  });
});

describe("getName", () => {
  it("Test to see if getName() returns name", () => {
    expect(testEmployee.getName()).toBe("Lauren");
  });
});

describe("getID", () => {
  it("Test to see if getID() returns ID", () => {
    expect(testEmployee.getID()).toBe("232323");
  });
});

describe("getEmail", () => {
  it("Test to see if getEmail() returns name", () => {
    expect(testEmployee.getEmail()).toBe("lferrett@gmail.com");
  });
});

describe("getRole", () => {
  it("Test to see if getRole() returns role", () => {
    expect(testEmployee.getRole()).toBe("Employee");
  });
});
