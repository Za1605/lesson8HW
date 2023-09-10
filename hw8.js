//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;

}


let boxUser = [

    new User(22,'Petro', 'popov', 33556),
    new User(426, 'sc', 'ty', 265),
    new User(234, 'tr', 'popo', 198),
    new User(981, 'yoyo', 'tyty', 345),
    new User(100, 'cece', 'gogo', 678),
    new User(123, 'cdcd', 'asas', 398),
    new User(123, 'ewew', 'dcdc', 345),
    new User(123, 'fgfdg', 'gfgf', 367),
    new User(123, 'fvdf', 'sasdsd', 765),
    new User(765, 'fgg`', 'fdsfsd', 456),
];
console.log(boxUser);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let boxUser1 = [

    new User(-22,'Petro', 'popov', 33556),
    new User(42633, 'sc', 'ty', 265),
    new User(2343423, 'tr', 'popo', 198),
    new User(9814, 'yoyo', 'tyty', 345),
    new User(-1003434256, 'cece', 'gogo', 678),
    new User(12366, 'cdcd', 'asas', 398),
    new User(0, 'ewew', 'dcdc', 345),
    new User(123445, 'fgfdg', 'gfgf', 367),
    new User(1234234254245425, 'fvdf', 'sasdsd', 765),
    new User(76514, 'fgg`', 'fdsfsd', 456),
];

let arrUs = boxUser1.filter((User) =>!(User.id %2));
console.log(arrUs);

let arrUs2 = boxUser1.filter((User)=>(User.id>=0));
console.log(arrUs2);

// Взяти масив з  User[]
//з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let BoxUse3 =[
new User(-22,'Petro', 'popov', 33556),
    new User(42633, 'sc', 'ty', 265),
    new User(2343423, 'tr', 'popo', 198),
    new User(9814, 'yoyo', 'tyty', 345),
    new User(-1003434256, 'cece', 'gogo', 678),
    new User(12366, 'cdcd', 'asas', 398),
    new User(0, 'ewew', 'dcdc', 345),
    new User(123445, 'fgfdg', 'gfgf', 367),
    new User(1234234254245425, 'fvdf', 'sasdsd', 765),
    new User(76514, 'fgg`', 'fdsfsd', 456),
];

let ArrUs5 = BoxUse3.sort((a, b)=>{
    return a.id - b.id;
});
console.log(ArrUs5);

//створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

function client(id, name, surname, email, phone, order) {
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new client (1, `petro`,`iv`, 45, 093, ['fgfdgdf','fgg','fgfdfgfgdfg','gfg', 'gfg','fgfg']),
    new client (2, `ivan`,`ivod`, 345, 098, [`fdsfffff`,`ghgh`,`ghghgjhgjh`,`fgf`,`sdf`]),
    new client (3, `petro`,`iv`, 345, 097, [`fdsfffgbg`,`th`,`fggg`]),
    new client (4, `stepan`,`iv`, 345, 096, [`fdsfgtfg`, `bn`,`bhuggfg`]),
    new client (5, `petro`,`iv`, 345, 099, [`fdsfjf`]),
    new client (6, `kim`,`iv`, 345, 095, [`fdsffjwf`,`dd`]),

    new client (7, `tim`,`iv`, 345, 094, [`fdsfweff`]),
    new client (8, `max`,`iv`, 345, 093, [`fdsfhgttff`,`ff`]),
    new client (9, `petro`,`iv`, 345, 098, [`fdsfff`]),
    new client (10, `ted`,`iv`, 345, 098),
];


// Взяти масив (Client [] з попереднього завдання).
//Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let Cli= clients.sort((b,a)=> {
    //return b.order.length - a.order.length
});

console.log(Cli);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//changeYear (newValue) - змінює рік випуску на значення newValue
//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car


function Car (model, produse, year, maxspeed, volume) {
  this.model = model;
  this.produse =produse;
  this.year =year;
  this.maxspeed = maxspeed;
  this.volume = volume;
  this.drive =[];
}

this.drive = function (Car){
    console.log('їдемо зі швидкістю ${this.maxspeed} на годину')
};

this.info = function () {
    console.log(`model:${this.model}`);
    console.log(`produse:${this.produse}`);
    console.log(`year:${this.year}`);
    console.log(`maxspeed:${this.maxspeed}`);
    console.log(`volume:${this.volume}`);
    console.log(`drive:${JSON.stringify(this.drive)}`);
}


this.increeaseMaxSpeed = function (newSpeed) {
    newSpeed = this.maxspeed + newSpeed;
    this.maxspeed = newSpeed < 0? 0:newSpeed
};

this.changeYear = function (newValue) {
    this.year = newValue
};

this.addDriver = function (name, age) {
    this.drive.push(new drive(name,age));
};

function Driver(name, age) {
    this.name = name;
    this.age = age;
};

const car11 = new Car('volvo', 'x60', '2020', 300, 3);

car11.drive()
car11.info();
car11.increeaseMaxSpeed(300)
car11.info()
car11.changeYear(2023)
car11.info()
car11.addDriver('Dima', 45)
car11.addDriver('Max',  36)
car11.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає
//його в поточний об'єкт car


//class Car (model, produse, year, maxspeed, volume) {
    this.model = model;
    this.produse =produse;
    this.year =year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive =[];
//}

//drive (){
    console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//};

info = function () {
    console.log(`model:${this.model}`);
    console.log(`produse:${this.produse}`);
    console.log(`year:${this.year}`);
    console.log(`maxspeed:${this.maxspeed}`);
    console.log(`volume:${this.volume}`);
    console.log(`drive:${JSON.stringify(this.drive)}`);
}


//increeaseMaxSpeed (newSpeed) {
    newSpeed = this.maxspeed + newSpeed;
    this.maxspeed = newSpeed < 0? 0:newSpeed;
//}

//changeYear (newValue) {
    this.year = newValue;
//}

//addDriver  (name, age) {
    this.drive.push(new drive(name,age));
//}

//const car11 = new Car('volvo', 'x60', '2020', 300, 3);

car11.drive()
car11.increeaseMaxSpeed(300)
car11.changeYear(2023)
car11.addDriver('Dima', 45)
car11.addDriver('Max',  36)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const ArrPop = [
    new Popelushka('Sveta', 23, 33),
    new Popelushka('Alla', 28, 36),
    new Popelushka('Irina', 22, 41),
    new Popelushka('Macha', 44, 40),
    new Popelushka('Kris', 67, 39),
    new Popelushka('Yana', 54, 35),
    new Popelushka('Sofa', 12, 36),
    new Popelushka('Juliya', 82, 37),
    new Popelushka('Tanya', 41, 42),
    new Popelushka('Yana', 44, 42),
];
class Popelushka extends person{
    constructor(name, age, foot) {
        super(name, age);
        this.foot = foot;
    }
}

class Princ extends person{
    constructor(name, age, size) {
        super(name, age);
        this.size = size;
    }

}

findPopel1(arr){
    for (const popel of ArrPop) {
        if (popel.foot === = this.size) {
            return popel;
        }
    }
}

findPopel2(arr){
    return arr
        .find(popel) => popel.foot === this.size;
}

const Princ = new Princ('Petro', 44, 42);
console.log(Princ.findPopel1(ArrPop));
console.log(Princ.findPopel2(ArrPop));












