// var today = new Date();
// var hourNow = today.getHours();
// var greeting;
// if (hourNow > 21) {
//     greeting = 'Доброй ночи!';
// } else if (hourNow > 18) {
//     greeting = 'Добрый вечер!';
// } else if (hourNow > 12) {
//     greeting = 'Добрый день!';
// } else if (hourNow > 0) {
//     greeting = 'Доброе утро!';
// } else {
//     greeting = 'Приветствуем!';
// }
// document.write('<h3>' + greeting + '</h3>');


// let Age = prompt("Your Age?");
// alert ("Your Age: "+ Age);


// let Num1 = +prompt("Введите первое число");
// let Num2 = +prompt("Введите степень");
// alert (Num1**Num2);


// document.write("text")


// Площадь круга
// const PI=3.14
// let r= prompt("Радиус")
// alert (r**2*PI)


// Площадь квадрата
// let a = 6;
// let b= 6;
// document.write (a*b);


// Градусы по фаренгейту в цельсия
// let F = +prompt("Введите градусы по фаренгейту");
// document.write ((F-32)*5/9)


// Массив
// let arr = [1,2,3, null,true,false];
// alert (arr);

// let arr = [1,2,3, null,true,false];
// console.log(arr[0]);


// let arr = [1,2,3, null,true,false]
// console.log(arr.length)

// Последний элемент массива
// let arr = [1,2,3, null,true,false]
// console.log(arr[arr.length-1])

// let arr = [1,2,3]
// arr[0]+=3
// arr[1]+=3
// arr[2]+=3
// console.log(arr)

// let arr = [1,2,3]
// arr[0]++
// arr[1]--
// console.log(arr);

// let arr = [1,2,3];
// arr[3]=(4);
// arr[4]=(5);
// console.log(arr);

// let arr =[1,2,3];
// arr.push("a");
// console.log(arr);

// let arr=["a","b","c"];
// let key=2;
// console.log(arr[key]);

// let arr=[1,2,3,4,5];
// let key1=1;
// let key2=2;
// console.log(arr[key1]+arr[key2]);

// let arr=["a","b","c"];
// delete arr[1];
// console.log(arr);


// let ageOfMyFavoriteStudent = 20;
// ageOfMyFavoriteStudent = ageOfMyFavoriteStudent + 1;
// ageOfMyFavoriteStudent++;

// console.log(ageOfMyFavoriteStudent);


// for(let i = 0;i<5;i++){
//     console.log(7+i);
// }
// for (let index = 7; index < 12; index++) {
//     console.log(index);

// }

// let age = 20;
// let height = 50.5;
// let name ="Pavel";
// let isUserMoreThen18 = age >= 18;
// let condition1 = isUserMoreThen18 && true;
// let condition2 = isUserMoreThen18 || condition1;
// let condition3 = condition1 && condition2;
// if (condition3){
//     console.log("smile");
// }else{
//     console.log("sad");
// }

// let password = "secret password".split("");
// password[2] = "!";
// console.log(password);

// let countOfS = 0;
// for (let i = 0; i < password.length; i++) {
//     const letter = password[i];
//     if (letter == "r") {
//         countOfS++;
//     }

// }
// console.log(`count of "s": ${countOfS}`);
// Обратный порядок
// let user='Catherine'
// let arrayLetter =user.split('');
// for (let index = arrayLetter.length-1; index >= 0; index--) {
//     const element = arrayLetter[index];
//     console.log(element);
// }
// let user='Catherine'
// let arrayLetter =user.split('');
// for (let index = 0; index < arrayLetter.length; index++) {
//     const element = arrayLetter[arrayLetter.length-1-index];
//     console.log(element);
// }

// let userMale = {
//     age: 30,
//     name: 'Ivan',
//     hasChild: true
// };
// let userFemale = {
//     age: 25,
//     name: 'Masha',
//     hasChild: false
// };

// function printUserInfo(user) {
// console.log(`I am looking at ${user.name}`);
// if (user.age>18){
//     console.log(`He looks us adult`);
// }
// if (user.hasChild){
//     console.log(`Child somewhere near`);
// }else{
//     console.log('Nobode near');
// }

// }

// printUserInfo(userMale);
// printUserInfo(userFemale);








// let users = [
//     createUser('Ivan'),
//     createUser('Olga'),
//     createUser('Masha')
// ];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     printUserInfo(user);

// }
// function printUserInfo(user) {
//     console.log(`name: ${user.name} age: ${user.age} height: ${user.height}sm weight: ${user.weight}kg`);
// }

// function createUser(userName) {
//     let user = {
//         name: userName,
//         age: randomNumber (0,50),
//         height: randomNumber(150,180),
//         weight: randomNumber(50,100),

//     };
//     return user
// }

// function randomNumber(min, max) {
//     return min + Math.floor(Math.random() * (max - min + 1));
// }









let Types = [
    createType('shoes'),
    createType('sneakers'),
    createType('boots')
];

for (let i = 0; i < Types.length; i++) {
    const Type = Types[i];
    printTypeInfo(Type);

}
function printTypeInfo(Type) {
    console.log(`name: ${Type.name} age: ${Type.age} color: ${Type.color} `);
}

function createType(TypeName) {
    const Typecolors = ['green', 'red', 'yellow', 'pink', 'black'];
    let colorIndex = randomNumber(0, Typecolors.length - 1);
    let color = Typecolors[colorIndex];
    
    let Type = {
        name: TypeName,
        color: color,
        age: randomNumber(33, 45),

    };
    return Type
}

function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
