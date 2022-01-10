const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const engineer = new Engineer("Bob", 1, "bob@test.com");

      expect(engineer).toEqual({ nameFull: "Bob", id: 1, email: "bob@test.com" });
    });
  });

  
});