//in essence, below we have our person module aka class...


//Section 6: Classes

//Section 6.1 class implementation
console.log("Section 6.1: Class implementation \n");

//Person class
export class cPerson {//use default keyword because the only object we have in this module is the person class, we don't have any other objects in the person module such as methods, other classes, etc.

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
const you = new cPerson("Blessing");