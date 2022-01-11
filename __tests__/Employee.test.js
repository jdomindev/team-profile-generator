const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee("Bob", 1, "bob@test.com");

      expect(employee).toEqual({ nameFull: "Bob", id: 1, email: "bob@test.com" });
    });

    it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
      const nameFull = 'Bob';
      const employee = new Employee(nameFull);

      expect(employee.nameFull).toEqual(nameFull);
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Employee();
      
    //   expect(cb).toThrow();
    // });
  });

});