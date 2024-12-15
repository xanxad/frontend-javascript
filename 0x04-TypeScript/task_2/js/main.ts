// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on todayClass value
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    throw new Error("Invalid subject");
  }
}

// Testing the functionality
console.log(teachClass("Math")); // Expected: "Teaching Math"
console.log(teachClass("History")); // Expected: "Teaching History"
