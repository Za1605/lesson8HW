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

let ArrUs7 = [
    new client (8, `petro`,`iv`, 45, 093, ['fgfdgdf','fgg','fgfdfgfgdfg','gfg', 'gfg','fgfg']),
    new client (5, `ivan`,`ivod`, 345, 098, [`fdsfffff`,`ghgh`,`ghghgjhgjh`,`fgf`,`sdf`]),
    new client (2, `petro`,`iv`, 345, 097, [`fdsfffgbg`,`th`,`fggg`]),
    new client (4, `stepan`,`iv`, 345, 096, [`fdsfgtfg`, `bn`,`bhuggfg`]),
    new client (7, `petro`,`iv`, 345, 099, [`fdsfjf`]),
    new client (6, `kim`,`iv`, 345, 095, [`fdsffjwf`,`dd`]),

    new client (3, `tim`,`iv`, 345, 094, [`fdsfweff`]),
    new client (8, `max`,`iv`, 345, 093, [`fdsfhgttff`,`ff`]),
    new client (9, `petro`,`iv`, 345, 098, [`fdsfff`]),
    new client (12, `ted`,`iv`, 345, 098),
];
console.log(ArrUs7);

// Взяти масив (Client [] з попереднього завдання).
//Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ArrUs8 = [
    new client (8, `petro`,`iv`, 45, 093, ['fgfdgdf','fgg','fgfdfgfgdfg','gfg', 'gfg','fgfg']),
new client (5, `ivan`,`ivod`, 345, 098, [`fdsfffff`,`ghgh`,`ghghgjhgjh`,`fgf`,`sdf`]),
new client (2, `petro`,`iv`, 345, 097, [`fdsfffgbg`,`th`,`fggg`]),
new client (4, `stepan`,`iv`, 345, 096, [`fdsfgtfg`, `bn`,`bhuggfg`]),
new client (7, `petro`,`iv`, 345, 099, [`fdsfjf`]),
new client (6, `kim`,`iv`, 345, 095, [`fdsffjwf`,`dd`]),

new client (3, `tim`,`iv`, 345, 094, [`fdsfweff`]),
new client (8, `max`,`iv`, 345, 093, [`fdsfhgttff`,`ff`]),
new client (9, `petro`,`iv`, 345, 098, [`fdsfff`]),
new client (12, `ted`,`iv`, 345, 098),