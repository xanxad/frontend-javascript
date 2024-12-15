// Interface describing the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the methods in the class
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation based on the interfaces
class StudentClassImpl implements StudentClass {
  firstName: string;
  lastName: string;

  // Constructor accepts firstName and lastName as arguments
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a string message
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClassImpl("John", "Doe");
console.log(student1.displayName()); // Should print: John
console.log(student1.workOnHomework()); // Should print: Currently working
