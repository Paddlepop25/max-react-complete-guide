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
