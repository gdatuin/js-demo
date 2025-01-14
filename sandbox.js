// let age = 25;
// let year = 2019;

// // log things to console
// console.log(age);

// age = 30;

// const points = 100;
// points = 50;
// console.log(points);

// var score = 75;
// console.log(score);




// // strings
// console.log('hello, world');

// let email ='mario@thenetninja.co.uk'
// console.log(email);

// // string concatenation

// let firstName = 'Brandon';
// let lastName = 'Sanderson';
// let fullName = firstName + ' ' + lastName;

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// // common string methods

// // result = email.lastIndexOf('n');
// // result = email.slice(2,5); 
// // result = email.substring(4,10)
// // let result = email.replace('m', 'w');


// // numbers

// let radius = 10;
// const pi = 3.14;

// // console.log(radius, pi);

// // math operators +, -,*, /, **, %

// // console.log(10 / 2);
// // result = radius % 3;

// // let result = pi * radius**2;

// // order of operation - BIDMAS (bedmas)

// // let likes = 10;
// // likes = likes + 1;
// // likes++;
// // likes--;
// // likes += 10;
// //likes -=5;
// // likes *=2;
// // likes /=2;


// // NaN - not a number
// // console.log(5 / 'hello');

// //  let result = 'the blog has ' + likes + '  likes';


// //template strings
// const title = 'Best reads of 2019';
// const author ='Mario';
// const likes = 30;

// // concatenation way 
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';


// //template string way
// // let result = `The blog called ${title} by ${author} has ${likes} likes`;

// // creating html templates 
// let html = `
//     <h2>${title}</h2>
//     <p> By ${author}</p>
//     <span>THis blog has ${likes} likes</span>
// `;


// // arrays

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] ='ken';
// // console.log (ninjas[1]);
//  let ages = [20,25,30,35];
//  // console.log(ages[2]);

//  let random = ['shaun', 'crystal', 30, 20];

//  console.log(ninjas.length);

//  //array methods
 

// let result = ninjas.join('-');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken,', 'crystal']);
// let result = ninjas.push('ken');
// let result = ninjas.pop();
// // console.log(ninjas);

// let age= null;

// console.log(age, age + 3, `the age is  ${age}`);


// // booleans & comparisons
// console.log(true,false, "true", "false");

// let email =  'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!');
// // let result = names.includes('bowser');

// console.log(result);

// //  comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'Shaun');

// let age = 25;

// loose comparison (different types can still be equal)

//console.log(age == 25);
// console.log(age == '25'); // converts string to number
//console.log(age != 25);
//console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25'); // will not convert to number

// // type conversion
// let score = '100';

// score = Number(score); // not parseint
// console.log(score + 1);

// console.log(typeof score);

// let result = Number('Hello');
// console.log(result); // = NaN

// let result = String(50);
// console.log(result, typeof result);

// let result = Boolean(100);

// let result = Boolean('0');

// // for loops
// for(let i = 0;  i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops
// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while(i < 5){
//  console.log('in loop: ', i);
//  i++
// }

// let i  = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops

// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5);

// if statements

// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//     if(ninjas.length > 3){

//         console.log("that's a lot of ninjas");
//     }


// // logical operators - OR || and AND &&

// const password = 'p@ssword1234';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough!');
// } else{
//     console.log('password is not strong enough');
// }

// logical NOT (!)

// let user = false;

// if(!user){

// }

// console.log(!true);
// console.log(!false);

// break and continute

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// // switch statements
// const grade = 'D';

// switch(grade){
//     case 'A':
//     console.log('you got an A!');
//     break;
//     case 'B':
//     console.log('you got an B!');
//     break;
//     case 'C':
//     console.log('you got an C!');
//     break;
//     case 'D':
//     console.log('you got an D!');
//     break;
//     case 'E':
//     console.log('you got an E!');
//     break;
//     default:
//         console.log('not a valid grade');
// }

// function declaration
// function greet(){
//     console.log('hello there');
// }

// // function expression
// const speak = function(){
//     console.log('good day!');
// };

// greet(); 
// speak();

// arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log('good ${time}! ${name}');
// };

// speak();

 // returning values
// const speak = function(name = 'luigi', time = 'night'){
//     console.log('good ${time}! ${name}');
// };

// speak();

// const calcArea = function(radius){
//     return 3.14 * radius**2;

// }

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){

// };

// calcVol(area)

// arrow function
// const calcArea = radius => 3.14 * radius**2;

// const greet = () => 'hello, world'


// const name = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// get a regrence to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html = ``;

// people.forEach(function(person){
//     // create html template
//     html += `<li style="color:purple">${person}</li>`
// });

// object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50}
// ]
// let user = {
//  name: 'crystal',
//  age: 30,
//  email: 'crystal@thenetninja.co.uk',
//  location: 'berlin',
//  blogs: [ { title: 'why mac & cheese rules', likes: 30 },
//  { title: '10 things to make with marmite', likes: 50} ],
//  login: function(){
//     console.log('the user logged in');
//  },
//  logout: function(){
//     console.log('the user logged out');
//  },
//  logBlogs: function(){
//     //this.blogs
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//         console.log(blog.title, blog.likes);
//     })
//  }
// };

// user.login();
// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// console.log(user['name']);
// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random));

// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAlll('.error');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[2]);

// get an element by ID
// const title = document.getElementById('page-title');

// // get elements by their class name
// const errors = document.getElementsByClassName('error')

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// //para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText =+ ' new text';
// });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML)
// // content.innerHTML += '<h2>This is a new h2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';