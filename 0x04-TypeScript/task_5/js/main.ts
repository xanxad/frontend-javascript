// task_5/js/main.ts

// Interfaces for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

// Example usage:
const subject1: MajorCredits = { credits: 5, brand: "major" };
const subject2: MajorCredits = { credits: 3, brand: "major" };
const majorSum = sumMajorCredits(subject1, subject2);
console.log(`Total Major Credits: ${majorSum.credits}`); // Output: Total Major Credits: 8

const subject3: MinorCredits = { credits: 4, brand: "minor" };
const subject4: MinorCredits = { credits: 2, brand: "minor" };
const minorSum = sumMinorCredits(subject3, subject4);
console.log(`Total Minor Credits: ${minorSum.credits}`); // Output: Total Minor Credits: 6
