//Focusing on plain vanilla js 

/*Section 1: variables and constants
var => function scoped
let => block scoped, has value reassignment
const => block scoped, no reassignment/changed once running the programme*/









//Section 2: Objects - collections of key value pairs

//person object with 3 members(1 property and 2 methods)
const person = {
    name: 'Blessing',
    walk(){},
    talk() {}
};

//method access via dot notation
person.talk();

//property access via bracket notation
person['name'] = "Zaheer";

//target member, to allow changing access to different properties within the object during program execution
const targetMember = 'name';
person[targetMember.value] = 'Kat';









//Section 2.2: this keyword - returns a reference to the current object
console.log("Section 2.2: this keword - returns a reference to the current object");
const thisImplementation = {
    name: 'Blessing',
    do(){
        console.log(this) //this is currently referring to this object which is: "Blessing"
    }
};
//calling the do function in the object 
thisImplementation.do();

const window = thisImplementation.do.bind(thisImplementation);
//calling the function as a standalone function outside of an object and preventing the program from returning the window object by using the bind method
window();
console.log("\n");










//Section 3: Arrow functions

/*standard js function
const square = function(number){
    return number * number;
}*/

//Section 3.1: standard arrow function 
console.log("Section 3.1: Standard arrow function");
        //number goes to number * number
const sqaure = number => number * number;
console.log("Sqaure of 5 = " + sqaure(5));




//where arrow functions are really useful

//jobs array
const jobs = [
    {id: 1, isActive: true},
    {id: 1, isActive: true},
    {id: 1, isActive: false}
];

//getting active jobs
//const activeJobs = jobs.filter(function(job) {return job.isActive})

                    //filer jobs where job is active
const activeJobs = jobs.filter(job => job.isActive)




//Arrow functions and this
//arrow functions don't rebind this
const human = {
    speak() {
        var that = this;
        //setTimeout(function(){//returns window object
        setTimeout(() => {
            console.log("this", this)
        }, 1000);
    }
};

//human.speak();
console.log("\n");









//section 3.2: Map array method
console.log("Section 3.2: Map array method \n");
//used to render lists in react, e.g. render a list of items

//rendering a list of colors
//colors array of color hmtl list items
const colors = ['red', 'green', 'blue'];

/*Standard implementation in js
const items = colors.map(function(color){
    return '<li>' + color + '</li>';
});*/

//implementation with an arrow method 
                //mapping col arr for each color return string: <li>${color}</li>
const items = colors.map(color => `<li>${color}</li>`);//rendering the color dynamically during runtime in es6
//`<li>${color}</li>` - template literal

//displaying list of color list items 
console.log("Array of color hmtl list items \n" + items);
console.log("\n");









//Section 4: Object destructuring

//address object
const address = {
    street: '',
    city: '',
    country: ''
};

/*instead of accessing properties using dot notation
address.street
address.city
address.country
which includes repetitive address object referencing*/

//rewrite the code this way
const {street, city, country} = address;
//this removes the necessity of using address.









//Section 5: Spread operator ...arrayName
console.log("Section 5.1: Spread operations with arrays \n");
const arrFirst = [1, 2, 3];
const arrSecond = [4, 5, 6];
console.log("First array: " + arrFirst);
console.log("Second array: " + arrSecond);


//combining the two arrays
//old js method of combining arrays
//const combined = first.concat(second);
//combining using the spread operator
const arrCombined = [...arrFirst, ...arrSecond];
console.log("Combined array: " + arrCombined);

//cloning the first array 
const arrClone = [...arrFirst];
console.log("Clone array: " + arrClone);
console.log("\n");




//Spreading objects
console.log("Section 5.2: Spread operations with objects \n");
const objFirst = {name: "Mosh"};
const objSecond = {job: "Instructor"};
console.log("First object: " + objFirst);
console.log("Second object: " + objSecond);


const objCombined = {...objFirst, ...objSecond, objLocation: "Austrailia"};
console.log("Comined object: " + objCombined);


//cloning objects
const objClone = {...objFirst};
console.log("Cloned object 1: " + objClone)









//Section 6: Classes

//Section 6.1 class implementation
console.log("Section 6.1: Class implementation \n");

//Person class
class classPerson {

    //constructor
    constructor(name){
        this.name = name;
    }

    //methods
    walk () {
        console.log("Walk");
    }
}

//creating an instance of the person
const you = new classPerson("Blessing");









//Section 6.2: Inheritance
console.log("Section 6.2: Inheritance \n");

//teacher subclass
class Teacher extends classPerson{

    //constructor 
    constructor(name, degree){
        super(name);//initializing the name property
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}

const t1 = new Teacher("Marius");