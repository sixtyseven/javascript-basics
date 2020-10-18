var __extends = function(Child, Parent) {
    function fn() {
        this.constructor = Child; // this can be omitted
    }
    fn.prototype = Parent.prototype;
    Child.prototype = new fn();
};

var Person = (function() {
    function Person() {
        this.gender = 'male';
    }
    Person.prototype.printPerson = function() {};
    return Person;
})();

var User = (function(Person) {
    // set User.prototype to Person object
    __extends(User, Person);
    function User() {
        Person.call(this);
        this.name = 'kunal';
    }
    // add User specific properties to the User.prototype
    User.prototype.printUser = function() {};
    return User;
})(Person);
