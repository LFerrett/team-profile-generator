const Intern = require("../lib/Intern.js");
const testIntern = new Intern("Lauren", "232323", "lferrett@gmail.com", "Ithaca");

describe("Intern", () => {
  it("test to see if the Intern class returns name, id, email, and Github", () => {
    expect(testIntern.name).toBe("Lauren");
    expect(testIntern.id).toBe("232323");
    expect(testIntern.email).toBe("lferrett@gmail.com");
    expect(testIntern.school).toBe("Ithaca");
  });
});

describe("getName", () => {
  it("Test to see if getName() returns name", () => {
    expect(testIntern.getName()).toBe("Lauren");
  });
});

describe("getID", () => {
  it("Test to see if getID() returns ID", () => {
    expect(testIntern.getID()).toBe("232323");
  });
});

describe("getEmail", () => {
  it("Test to see if getEmail() returns name", () => {
    expect(testIntern.getEmail()).toBe("lferrett@gmail.com");
  });
});

describe("getSchool", () => {
  it("Test to see if getSchool() returns school", () => {
    expect(testIntern.getSchool()).toBe("Ithaca");
  });
});

describe("getRole", () => {
  it("Test to see if getRole() returns role", () => {
    expect(testIntern.getRole()).toBe("Intern");
  });
});
