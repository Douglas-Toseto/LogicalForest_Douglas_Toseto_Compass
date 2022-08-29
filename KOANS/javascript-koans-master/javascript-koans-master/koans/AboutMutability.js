describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {    //.prototype adiciona uma propriedade ao Objeto Person, assim todas suas instâncias irão herdar essa propriedade
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {         //está alterando o método do objeto aPerson apenas
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John");
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;  //fullName é uma variável local, não um atributo (seria, caso a declaração fosse this.fullName=...)

      this.getFirstName = function () { return firstname; }; // métodos Getters
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; }; // get para ter acesso a var local fullName
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny"; //não existia nenhum desses três atributos no obj, então eles foram inseridos agora
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews"; 

    expect(aPerson.getFirstName()).toBe("John"); // mas os getter retornam os valores dos parâmetros de criação dos obj
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {   //está alterando o método desse obj
      return aPerson.lastname + ", " + aPerson.firstname; //está retornando os atributos (que foram criados posteriormente)
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });

});
