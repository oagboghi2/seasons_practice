//Nextient Interview questions and answers

//Use filter method to find dave in this array

const peopleArray = [ { id: 123, name: "dave", age: 23 }, { id: 456, name: "chris", age: 62 }, { id: 789, name: "bob", age: 14 }, { id: 101, name: "tom", age: 23 }, { id: 102, name: "tim", age: 17 } ];

Answer: const person = peopleArray.filter(person => person.name === 'dave')

//Why does this return undefined
const anotherAwesomeFn = x => { x * 5; }; console.log(anotherAwesomeFn(7));

// Becuase arrow function have explicit return. If we wanted this function to work, we would write it like this
const anotherAwesomeFn = x => {
    return x * 5;
};
console.log(anotherAwesomeFn(7));

//use dot notation and bracket notation to sift through object
const joeUser = {
    name: ‘Joe’,
    age: 31,
    occupation: ‘Developer’
};

console.log(joeUser.age);
console.log(joeUser['age']);



const props = {
    users: [{
        id: 789,
        name: "bob",
        age: 14
    }, {
        id: 101,
        name: "tom",
        age: 23
    }, {
        id: 102,
        name: "tim",
        age: 17
    }],
    colors: [‘red’, ‘blue’, ‘green’],
    id: 1234
}

props.users.

var myObj = {}; // Empty Object
//Check to see fi a object is empty by checking the length of the keys
Object.keys(myObj).length > 0