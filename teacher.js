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