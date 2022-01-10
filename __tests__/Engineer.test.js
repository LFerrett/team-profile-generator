const Engineer = require("../lib/Engineer.js");
const testEngineer = new Engineer("Lauren", "232323", "lferrett@gmail.com", "lferrett");

describe("Engineer", () => {
  it("test to see if the Engineer class returns name, id, email, and Github", () => {
    expect(testEngineer.name).toBe("Lauren");
    expect(testEngineer.id).toBe("232323");
    expect(testEngineer.email).toBe("lferrett@gmail.com");
    expect(testEngineer.github).toBe("lferrett");
  });
});

describe("getName", () => {
  it("Test to see if getName() returns name", () => {
    expect(testEngineer.getName()).toBe("Lauren");
  });
});

describe("getID", () => {
  it("Test to see if getID() returns ID", () => {
    expect(testEngineer.getID()).toBe("232323");
  });
});

describe("getEmail", () => {
  it("Test to see if getEmail() returns name", () => {
    expect(testEngineer.getEmail()).toBe("lferrett@gmail.com");
  });
});

describe("getGitHub", () => {
  it("Test to see if getGitHub() returns github", () => {
    expect(testEngineer.getGitHub()).toBe("lferrett");
  });
});

describe("getRole", () => {
  it("Test to see if getRole() returns role", () => {
    expect(testEngineer.getRole()).toBe("Engineer");
  });
});
