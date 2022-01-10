const Manager = require("../lib/Manager.js");
const testManager = new Manager("Lauren", "232323", "lferrett@gmail.com");

describe("Manager", () => {
  it("test to see if the Manager class returns name, id, and email", () => {
    expect(testManager.name).toBe("Lauren");
    expect(testManager.id).toBe("232323");
    expect(testManager.email).toBe("lferrett@gmail.com");
  });
});

describe("getName", () => {
  it("Test to see if getName() returns name", () => {
    expect(testManager.getName()).toBe("Lauren");
  });
});

describe("getID", () => {
  it("Test to see if getID() returns ID", () => {
    expect(testManager.getID()).toBe("232323");
  });
});

describe("getEmail", () => {
  it("Test to see if getEmail() returns name", () => {
    expect(testManager.getEmail()).toBe("lferrett@gmail.com");
  });
});

describe("getRole", () => {
  it("Test to see if getRole() returns role", () => {
    expect(testManager.getRole()).toBe("Manager");
  });
});
