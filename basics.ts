// Primitives: number, string, boolean, null, undefined
// more complex types: arraus. objects
// function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// more complex types
let hobbies: string[];
hobbies = ['true', '33', 'cat'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 22,
};

// array of persons
let people: {
  name: string;
  age: number;
}[];

// Type inference
/**
 * there is error on course = 123 because typescript will try to infer that the type is string as it's initialized above
 */
let course = 'React - The Complete Guide';
// course = 123; // error

// Union Types
let fruit: string | number = 55;
fruit = 'durian'; // no error because can be string or number
// fruit = true // error because boolean not stated as possible type of fruit

// Type aliase
type Noodle = {
  name: string;
  isThick: boolean;
};

let noodle: Noodle;
noodle = {
  name: 'bee hoon',
  isThick: false,
};

let noodles: Noodle[];
noodles = [
  {
    name: 'mee tai mak',
    isThick: true,
  },
  {
    name: 'linguini',
    isThick: false,
  },
];

// Functions & types
function multiply(a: number, b: number): number {
  return a * b;
}

// special return type: VOID is compared to null and undefined
// VOID means the function never returns
function printOutput(value: any): void {
  console.log(value);
}
