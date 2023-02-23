
// var is an outdated syntax
var name = 'Maku';
var age = 29;
var hasHobbies = true;

// let is another way of creating variables, also it has changing values
const name2 = 'MDevT';
let age2 = 22;
const hasHobbies2 = true;

age2 = 35;

function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies:' + userHasHobby);
};

// creating an arrow function 
const summarizeUser2 = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies:' + userHasHobby);
};

// shorter version of creating syntax
const add = (a, b) => {
    return a + b;
};
// if you only have one function with only one return statement
const add2 = (a, b) => a + b;

// to only add one
const addOne = (a) => a + 1;

console.log(addOne(3));
console.log(add(1, 2));
console.log(add2(3, 4));
console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser(name2, age2, hasHobbies2));

// Objects, Properties & Methods
// key value pair is also called a property or a field of the object
const person = {
    name: "MDevT",
    age: "29",

    // this is prints undefined because we are accessing global scope to the global node
    greet: () => {
        console.log("Hi, I am " + this.name);
    },

    // this is the correct way
    greet2() {
        console.log("Hi, I am " + this.name);
    }
};

person.greet();
person.greet2();

// Arrays & Arrays Method
const hobbies = ['Gym', 'Programming']
for (let i of hobbies) {
    console.log(i);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// Spread Operator 
// allow us to copy all or party of an existing array or object into another array or object
const coppiedArray = [...hobbies];
console.log(coppiedArray);

// Rest Operator
// allows a function to treat an indefeinte number of arguments as an array
const toArray = (...args) => {
    return args;
};

// destructuring in object
const person3 = {
    name3: 'Inori',
    age3: 22,
    greet3() {
        console.log('Hi, I am' + this.name3);
    }
}

const printName = ({ name3 }) => {
    console.log(name3);
}

printName(person3);

const { name3, age3 } = person3;
console.log(name3, age3);

// array destructuring 
const hobbies2 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)

//asnyc code
setTimeout(() => {
    console.log("Timer is done!!");
})

//nested async and promise code
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Tapos kana!");
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => { console.log(text2); });
}, 2000);