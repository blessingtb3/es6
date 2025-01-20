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