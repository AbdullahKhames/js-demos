# to run scripts just type node <name of script>

to setup a js backend application you need to have node js installed then npm run <name of script>
then define the package.json to allow us to have dependencies

add   "type": "module",
in package.json to allow for es6 shape of importing
and add "start" script to define what npm start does for example node app.js


this is the old way of exporting 
function taskThree() {
  let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
  console.log(myString.slice(0, myString.indexOf('@', 28)))
}
in module exports
module.exports = { taskThree };

and in the other file

const { taskThree } = require("./assignment3");

