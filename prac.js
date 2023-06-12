alert('Hello World');
console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');
// let, const
let number = 30
console.log(number)
const score = 145
console.log(score)
// strings, numbers, boolean, null, undefined, symbol
const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
//concatenation
console.log('my name is ' +name + ' And i am '+age  )
//template string
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);
//getting the number of character and chane to uppercase and decide what to show
const a = 'Hello World';
console.log(a.toUpperCase());
console.log(a.length);
console.log(a.substring(0 , 5));
const tech = 'programmer, devop, data analyst, cybersecurity'
console.log(Array.isArray('tech'))
console.log(tech.split(','));
//Arrays : they are variables that holds multiple values
const fruits = ['mangoes' , 'orange' , 'grape'];
fruits [3] = 'cherry';
fruits.push('Apples')
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray ('fruits'));
console.log(fruits);
console.log(fruits [3]) ;
console.log(fruits.indexOf('strawberries'));
const person = {
    firstName: 'ismail',
    lastName: 'orogiri',
    age: 24,
    hobbies: ['reading', 'coding', 'games', 'music'],
    Address: {
        city: 'ikorodu',
        state: 'lagos',
        street: 'kunfayakun',
        postalCode: 30654
    }
}
console.log(person);
console.log(person.hobbies [2]);
// const todo
const todos=[
    {
        id: 1,
        text: 'Take me out',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
]
console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
//for
for(let i=0; i<= 10; i++){
    console.log(`for loop number: ${i}`);
}

//while
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}
// for in arrays
for(let todo of todos) {
    console.log(todo.text);
}
//for each,map and filter
todos.forEach(function(todo) {
    console.log(todo.id)
})
const todoText =todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
const todoCompleted =todos.filter(function(todo) {
    return todo.isCompleted===true;
});
console.log(todoCompleted);
//conditional
const o = 4;
if(o ==10){
    console.log('o is 10');
} else if (0 > 10) {
    console.log('o is greater than 10')
} else{
    console.log('o is less than 10')
}
const p = 28
const q = 29
if(p >= 28 && q   >= 29 ){
    console.log('p is greater than 28 or y is grater than 29')
}//condition 2
const g = 10
const color = g<10 ? 'red' : 'blue';
console.log(color)
switch(color){
    case 'red':
        console.log('color is red');
    break;
    case 'blue':
            console.log('color is blue');
    default:
        console.log('color is NOT red or blue' );
    break;
}
//function
function addNums(num1 = 4, num2 = 7){
    return num1 + num2
}
    console.log(addNums(4, 7));
    //constructor function
    function peerson(firstName, lastName, dob){
        this.firstName=firstName;
        this.lastName= lastName;
        this.dob = dob;
    }
    //instantiate object
    const person1 = new peerson ('john', 'peter', '15-01-1999');
    const person2 = new peerson ('okorie', 'daniel', '15-01-1998');
    console.log(person2);
