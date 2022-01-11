const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const engineer = new Engineer("Bob", 1, "bob@test.com");

      expect(engineer).toEqual({ nameFull: "Bob", id: 1, email: "bob@test.com" });
    });

    it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
      const nameFull = 'Bob';
      const engineer = new Engineer(nameFull);

      expect(engineer.nameFull).toEqual(nameFull);
    });

  });

  
});