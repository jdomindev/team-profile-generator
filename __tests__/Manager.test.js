const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const manager = new Manager("Bob", 1, "bob@test.com");

      expect(manager).toEqual({ nameFull: "Bob", id: 1, email: "bob@test.com" });
    });
  });

  
});