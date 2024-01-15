# js-demos

when creating a new object with constructor call with the new operator (keyword)
new creates a new instance and binds (this) to the new created object
and then links the new created object to another object
links to the prototype of the constructor that was used to create the object

when calling user.id
the user instance searches for the property on its properties
if not found it goes level up to the prototype chain and keeps going up till to Object object

inheritance in js
first way:
the child prototype carries an instance of the parent
this way is called Pseudo classical

second way:
inherit prototype property of the parent to the prototype property of the child

this reference:
it is a special keyword that is automatically defined in the context of every function.
there are 5 cases for the value of this variable depending on how the method was invoked.
1- global context:
    when a function that is not a method is called the (this) variable refers to the global object, which is window in a browser environment.

2- method invocation
    If a function is a method of an object, this refers to the object that the method was called on.

3- constructor invocation
    When a function is used as a constructor (invoked with the new keyword), this refers to the newly created object.

4- explicit binding
    You can explicitly set the value of this using methods like call() or apply().

5- arrow functions
    Arrow functions do not have their own this. Instead, they inherit the this value from the enclosing scope.

//--------------------------------------------------------------------------------------------------------------------------------

// the three steps for inheritance
inheritance here is like delegation not like the other oop languages where there is a copy of the attributes to the child object
first call the parent constructor with this reference
second change the prototype to thee parent prototype
but with object.create due to now the parent prototype
constructor will be the child object
third change back the constructor property of the new class to the wanted constructor

const abstractUser = function (nm) {
  if (this.constructor === abstractUser) {
    throw "this is an abstract cannot be instantiated";
  }
  this.name = nm;
};
const inhUser = function (nm, age) {
  // first
  abstractUser.call(this, nm);
  this.age = age;
};
// second
inhUser.prototype = Object.create(abstractUser.prototype);
// third
inhUser.prototype.constructor = inhUser;
