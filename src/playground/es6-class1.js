class Person {
    constructor(name="Anonymous",age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi i am ${this.name}.`;
    }
    getDescription(){
        return  `${this.name} is ${this.age} years old!`;
    }
}

class Travaller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(!!location)
        {
            greeting+=`Iam from ${this.location}.`;
            return greeting;
        }
        else
        return greeting;
    }
}

const me = new Travaller("Manas Rajowar",20,"Bankura");
console.log(me.getGreeting());