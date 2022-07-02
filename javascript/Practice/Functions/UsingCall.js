let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

function displayPerson(){console.log(this)};

 displayPerson.call(person);
 
// output
//  {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}

displayPerson.call(person.firstName);
