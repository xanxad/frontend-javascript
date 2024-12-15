// task_4/js/main.ts

// Importing classes from subjects
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Creating and exporting constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Creating and exporting the Teacher object with experienceTeachingC set to 10
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Output: Available Teacher: John

// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Output: Available Teacher: John
