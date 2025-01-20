//in essence, below we have our teacher module and the teacher class... and promote function within the module

//Section 6.2: Inheritance
console.log("Section 6.2: Inheritance \n");

//imports 
import {cPerson} from './cPerson.js';


//Section 6.3: named default exports 
export  function promote(){
    console.log("Promote");
}


//teacher subclass
export default class cTeacher extends cPerson{

    //constructor 
    constructor(name, degree){
        super(name);//initializing the name property
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}

const t1 = new cTeacher("Marius");

/*Summary
Default Exports:
One per module.
Can be imported with any name.
Named Exports:
Multiple per module.
Must be imported with the exact names or can be renamed using as.
This modular approach helps in organising code, enhancing reusability, and maintaining clear dependencies within JavaScript applications.
*/