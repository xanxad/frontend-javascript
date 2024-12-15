interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Render table
const body = document.querySelector("body");
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cellName = document.createElement("td");
  const cellLocation = document.createElement("td");

  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body?.appendChild(table);
