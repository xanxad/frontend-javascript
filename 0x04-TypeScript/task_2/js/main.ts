// Director and Teacher interfaces with required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary >= 500) {
    return new Director();
  } else {
    return new Teacher();
  }
}

// Function to check if an employee is a Director
function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Testing the functionality
console.log(executeWork(createEmployee(200))); // Expected: "Getting to work"
console.log(executeWork(createEmployee(1000))); // Expected: "Getting to director tasks"
