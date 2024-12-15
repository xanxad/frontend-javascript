// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allows additional properties with any name
}

// Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute for Directors
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
