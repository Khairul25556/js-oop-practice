//* Factory function

//First Example
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
    };

    return person;
};

const data = [
    ["Dexter", 26],
    ["Jane", 32],
    ["Khairul", 28]
]

data.forEach(([name, age]) => {
    console.log(PersonMaker(name, age).talk());
});

//Second Example

function playGame(name, platform) {
    const game = {
        name: name,
        platform: platform,
        play() {
            console.log(`${platform} is on. ${this.name} is starting...........`);
        },
    };
    return game;
}

const data1 = [
    ["Far cry 3", "Steam"],
    ["Far cry 4", "Steam"],
    ["Assassins's creed", "ubisoft"],
    ["Red dead redemption 2", "Xbox"],
    ["Red dead redemption 3", "Xbox"]
]

data1.forEach(([name, platform]) => {
    console.log(playGame(name, platform).play());
});



//Third Example
function worldMap(country, capital) {
    const info = {
        country: country,
        capital: capital,
        information() {
            console.log(`The capital of ${country} is ${capital}`);
        }
    };

    return info;
};

const data2 =[

    ["Bangladesh", "Dhaka"],
    ["India", "New Delhi"],
    ["USA", "Washington D.C."],
    ["China", "Beijing"]
];

data2.forEach (([country, capital]) => {
    console.log(worldMap(country, capital).information());
})

//* In factory function No prototype → More memory usage. So, basically Every time you create a new object using a factory function, all methods are recreated for each object. This uses more memory than constructor functions or classes, where methods are shared via the prototype.


//* New operator

//*constructor - doesn't return anything and start with capital

//First Example
function Dept(name, university) {
    this.name = name;
    this.university = university;
    console.log(this); //before using "new" "this" this is basically refer tothe global object after using "new" "this" this is  create a new object
}

Dept.prototype.background = function() { //We're adding a method named background() to the prototype of Dept. This allows all objects created with Dept to share this method (memory efficient).
    console.log(`${this.name} is the best department of the ${this.university}`);
}

// let p1 = new Dept("ICT", "CU"); 
// console.log(p1.background());

let data3 = [
    ["EEE", "BAUET"],
    ["CSE", "DU"],
    ["IT", "RUET"] 
];

data3.forEach(([name, university]) => {
    let dept = new Dept(name, university); //When used with new, it creates a new object and assigns the properties name and university to it. It creates a new Dept object: new Dept(name, university)
    console.log(dept.background());
});

//Second Example
function BookPrice (name, price, rating) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    // console.log(this);
}

BookPrice.prototype.info = function() {
    console.log(`The ${this.name} book's price is ${this.price}. Rating: ${this.rating} `);
};

const data4 = [
    ["Game of thrones", "$150", "****"],
    ["House of Dragon", "$200", "*****"],
    ["Time", "$50", "***"]
];

data4.forEach(([name, price, rating]) => {
    let Book = new BookPrice(name, price, rating);
    console.log(Book.info());
});

//*constructor functions use prototype, so the method is shared and not duplicated.

//* Now using "classes" which is best of all of these

//First Example
class Weather {
    constructor (country, temp) {
        this.country = country;
        this.temp = temp;
        // console.log(this);
    }

    info() {
        console.log(`The temp of ${this.country} is ${this.temp} `); //Automatically prototype will be created for this function
    }
}

// let p2 = new Weather("Bangladesh", "12.5deg");

const data5 = [
    ["Bangladesh", "37deg"],
    ["India", "35deg"],
    ["America", "55deg"]
];

data5.forEach(([country, temp]) => {
    let weather = new Weather(country, temp);
    console.log(weather.info());
});

//* Inheritance classes
//It's a mechanism that allows us to create new classes on the basis of already existing classes.

//First Example

//*base class (parent)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I'm ${this.name}. And I'm ${this.age} years old`);
    }
}

//*child class
class Student extends Person {
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
}

//*child class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let newStu = new Student("John Dulton", 29, 95);
let newTea = new Teacher("Rifat", 35, "EEE");

console.log(newStu.talk());
console.log(newTea.talk());

//Second Example

//*base class (parent)
class Mammal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded"; 
    }

    eat() {
        console.log("I am eating");
    }
}

//*child class
class Dog extends Mammal {
    constructor(name){
        super(name);
    }

    bark() {
        console.log("wooff.......!");
    }

    eat() {                         //if we use eat function here it will override parent eat()
        console.log("Dog is eating");
    }
}

//* child class
class Cat extends Mammal {
    constructor(name){
        super(name);
    }

    meow() {
        console.log("Meow.....!")
    }
}

let dog1 = new Dog("Tom");
console.log(dog1.bark());

let cat1 = new Cat("jerry");
console.log(cat1.meow());



