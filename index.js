/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
/*function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString; }   /* I like this example*/
  
  

const numbers = [1,2,3,4,5,6,7,8,9];
let sumOfNumbers = numbers.reduce((x,y) => x+y);
console.log(sumOfNumbers); 

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 

function calculateAverage(numbers) {
    if (numbers.length === 0) { // Check for an empty array

    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum of the array elements
    return sum / numbers.length; // average
}

const array = [1, 2, 3, 4, 5];
const average = calculateAverage(array);
console.log(average); 

function FindReturnSum{
    return (string[]) {
        int[]array = {1,2,3,4,5};
        int length = array.length;
        int sum = 0;
        for (int i=0;i<length;i++){
            sum=sum+array[i];
        }
        console.log("Sum of elements of array: " + sum);
            float average =sum/length;
            console.log("average of elements of array :"+ average);
    }
}

function reverseString(['say', 'hello', 'in', 'the', 'morning'], 3); {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString; }   /* I like this example


/*Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example,*/

/*stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].*/

function filter_strings_by_length(strings, min_length):
    return [(s) > min_length]  /*s for string*/
/* Iterating Over the Array*/
array_of_strings = ["sock", "hat", "glove", "shoe", "shirt"]
number = 3
strings = (strings, number)
console.log (strings) 

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

console.log(10);


  /* Copied From Assignement ------
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }  /* I like this example*/
  
  /*function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))   /*intentional*/
  /*console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))*/

  /*Part 2: Thinking Methodically*/
  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    // Example array of objects with an age property
let people = [
    { name: "Bruce", age: 42 },
    { name: "Barry", age: 48 },
    { name: "Bob", age: 57 },
    { name: "Blaine", age: 63 }
];

// Sorting the array by age
let filteredPeople = people.filter(person => person.age <= 50);

console.log(filteredPeople);

/*Mapping the Array* object keys each person should have a function, console.log each Key(person,name,age,email etc)*/
let people = [
    { name: "Bruce", age: 42 ,job: "Knight"},
    { name: "Barry", age: 48 ,job: "Runner"},
    { name: "Bob", age: 57 , job: "Fry Cook"},
     { name: "Blaine", age: 63 , job: "Quiz Master"}
     age: person.age + 1 
];

let ageOfPeople = people.reduce((sum,person)=> sum + person.age,0);
let averageAge = ageOfPeople / people.length;
console.log("Total Age:", ageOfPeople );
console.log("Average Age:", averageAge);


/*Part 3*/

let person = { /* object keys*/
    name: "Bruce",
    age: 42, /*set age field to zero*/
    occupation: "Knight"
    updated_at: "0" /*Date object with the current time*/
};

// Using spread syntax
function ageOfPeople(person) {
    let personCopy = { ...person, age: person.age + 1 }; /*key age
    return personCopy;
}



// Or Example usage
let updatedPersonUsingSpread = incrementAgeUsingSpread(person);
let updatedPersonUsingAssign = incrementAgeUsingAssign(person);

console.log("Updated Person (Spread Syntax):", updatedPersonUsingSpread);
console.log("Updated Person (Object.assign):", updatedPersonUsingAssign);