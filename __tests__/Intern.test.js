const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const intern = new Intern("Bob", 1, "bob@test.com");

      expect(intern).toEqual({ nameFull: "Bob", id: 1, email: "bob@test.com" });
    });

    it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
      const nameFull = 'Bob';
      const intern = new Intern(nameFull);

      expect(intern.nameFull).toEqual(nameFull);
    });

  });

  
});