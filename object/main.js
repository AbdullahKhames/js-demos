const User = function (id, fName, lName, age, pAttr) {
  this.id = id ? id : ++User.count;
  this.fName = fName ? fName : "Muhammad";
  this.lName = lName ? lName : "Abdullah";
  this.age = age ? age : 63;
  const self = this;
  // private variable by getting advantage of function's local scope
  var pAttribute = pAttr ? pAttr : "private attribute";
  if (id) {
    User.count++;
  }
  // this is a privileged method that can access fields or properties from
  //inside the constructor function and be called from outside due to closure
  this.getPAttr = function () {
    return pAttribute;
  };
  // another privileged function
  // first the interpretetr check within the setter function it self for that varialbe if found it sets it
  // if not found iut checks the outer scope which will be the private method
  this.setPAttr = function (pAttr) {
    pAttribute = pAttr;
  };
  // private method it cannot be viewed from outside this constructor declaration
  function getFullName() {
    // this here is window object !!! why is that
    // because (this) is bound implicitly
    return fName + " " + lName + " " + pAttribute;
  }

  // here the function invocation looks for the caller object if not found like in calling user1.getPAttr()
  // it is bound to the window object then the this reference will be equal to window

  // method to call the private method;
  this.pMethodCaller = getFullName;
  // another private method with this reference
  // this in the call welcoming will refer to window object

  // this to change the default behavior and explicitly call this of the current object
  // when this private method is invoked.
  // this is called hard binding
  //so to summarize creating of private functions:
  // 1- declare function inside constructor
  // 2- bind the function with this to the cuurent object by binding (this) to the function
  // 3- refer to the explicitly bound method with another variable then return that variable
  function welcoming() {
    alert(`welcome ${this.fName}`);
  }
  this.welcomingCaller = welcoming.bind(this);

  //so to summarize creating of private functions:
  // 1- declare function inside constructor to be a private function
  // 2- create a variable with any name then make it refer to (this)
  // 3- just bind the call to the new reference you created instead of this
  function useSelf() {
    console.log(`welcome ${self.fName}`);
  }
  this.useSelfCaller = useSelf;

  // also creating methods on the class with this reference
  // to be able to call it with the object when calling some window functions
  // like setTimeout(), or alert
  // you send a reference of this from the outer scope where this is none to refer to the object
  this.show = function () {
    // like here define the variable or from the outer scope
    // const self = this;
    window.setTimeout(
      (n) => {
        console.log(n);
        console.log(self.fName);
      },
      2000,
      5
    );
  };

  /* this keyword inside method that calls alert or set time out or
     any of the window object's methods
  */
};

// static variable
User.count = 0;

// this is to define methods on the prototype to have only one copy of the method created
// not every instance carry its own same version of the method defined
User.prototype.getInfo = function () {
  return `${this.fName} ${this.lName} ${this.age}`;
};

function assert(condition, message, successMessage) {
  if (!condition) {
    console.error("Assertion failed:", message);
  } else {
    console.log("condition succeeded");
    console.log(successMessage ? successMessage : "correct val");
  }
  console.log("-".repeat(40));
}
//--------------------------------------------------------------------------------------------------------------------------------

const user1 = new User();
console.log(user1);
assert(user1.id === 1, "id is not correct", "user1 id is 1");
assert(user1.getPAttr() === "private attribute", "pAttr wrong val");
user1.setPAttr("new val");
assert(user1.getPAttr() === "new val", "pAttr wrong val");

//--------------------------------------------------------------------------------------------------------------------------------
const user2 = new User(2, "abdullah", "khames", 27, "val");
console.log(user2);

assert(
  user2.pMethodCaller() === "abdullah" + " " + "khames" + " " + "val",
  "wrong private method return"
);
user2.useSelfCaller();
user2.show();
//--------------------------------------------------------------------------------------------------------------------------------

// all objects are reference values only primitives are immutable
// so this user3 is actually refering to the same object as user2
const user3 = user2;
console.log(user3);
user3.age = 28;
assert(user2.age === 28);

// //--------------------------------------------------------------------------------------------------------------------------------

// this to make shallow copy of the object
const user4 = new User();
keys = Object.keys(user2);
for (let index = 0; index < keys.length; index++) {
  user4[keys[index]] = user2[keys[index]];
}
console.log(user4);

// //--------------------------------------------------------------------------------------------------------------------------------

// this to make shallow copy of the object by another way

const user5 = new User();
for (let i in user2) {
  user5[i] = user2[i];
}
console.log(user5);
console.log(user5.getInfo());
// //--------------------------------------------------------------------------------------------------------------------------------

// inheritance demos

// first way pseudo classical
// problems found so far that cannot set the values explicitly that came from the parent object as it is set to a new instance on the prototype and it gets that constructor default values
// so when try to fix with constructor.call(this, args)
// still doesn't work because now i have the attributes twice.
const Instructor = function (
  id,
  fName,
  lName,
  age,
  pAttr,
  volunteer,
  coursesNames
) {
  User.call(this, id, fName, lName, age, pAttr);
  this.volunteer = volunteer;
  this.coursesNames = coursesNames;
};
Instructor.prototype = new User();
Instructor.prototype.getInstructorCourses = function () {
  return this.coursesNames;
};

//--------------------------------------------------------------------------------------------------------------------------------

const instructor1 = new Instructor(2, "abdullah", "khames", 27, "val", true, [
  "java",
  "kotlin",
  "react",
]);
console.log(instructor1);
assert(instructor1.id === 2, "id is not correct", "instructor1 id is 2");
assert(instructor1.getPAttr() === "val", "pAttr wrong val");
instructor1.setPAttr("new val");
assert(instructor1.getPAttr() === "new val", "pAttr wrong val");
console.log(instructor1.fName);
console.log(instructor1.getInfo());
console.log(instructor1.getInstructorCourses());
instructor1.useSelfCaller();
// //--------------------------------------------------------------------------------------------------------------------------------

// second way proto
// now i don't have the attributes of the parent i have only properties defined on the prototype
// because i didn't access the parent constructor here
// so to solve also use the constructor.call or apply or bind and explicitly send this to it with the args.
// another problem that the constructor property of the new object is set to the inherited object so must explicitly set it to the real object
const Student = function (id, fName, lName, age, pAttr, coursesNames) {
  User.call(this, id, fName, lName, age, pAttr);
  this.coursesNames = coursesNames;
};
Student.prototype = User.prototype;
Student.prototype.constructor = Student;
Student.prototype.getStudentCourses = function () {
  return this.coursesNames;
};

//--------------------------------------------------------------------------------------------------------------------------------

const student1 = new Student(2, "abdullah", "khames", 27, "val", [
  "java",
  "kotlin",
  "react",
]);
console.log(student1);
assert(student1.id === 2, "id is not correct", "student1 id is 2");
assert(student1.getPAttr() === "val", "pAttr wrong val");
student1.setPAttr("new val");
assert(student1.getPAttr() === "new val", "pAttr wrong val");
console.log(student1.fName);
console.log(student1.getInfo());
console.log(student1.getStudentCourses());
student1.useSelfCaller();
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
// abstract class in js

const abstractUser = function (nm) {
  if (this.constructor === abstractUser) {
    throw "this is an abstract cannot be instantiated";
  }
  this.name = nm;
};
//--------------------------------------------------------------------------------------------------------------------------------
// the three steps for inheritance
const inhUser = function (nm, age) {
  // first call the parent constructor with this reference
  abstractUser.call(this, nm);
  this.age = age;
};
// second change the prototype to thee parent prototype
// but with object.create due to now the parent prototype
// constructor will be the child object
inhUser.prototype = Object.create(abstractUser.prototype);
// third change back the constructor property of the new class to the wanted constructor
inhUser.prototype.constructor = inhUser;
//prototype shadowing example
inhUser.prototype.toString = function () {
  return "welcome " + this.name + " " + this.age;
};

// Example usage
try {
  const user6 = new abstractUser("error"); // This will throw an error
} catch (error) {
  console.error(error);
}
const user7 = new inhUser("abdullah", 27);

console.log(user7.toString());
