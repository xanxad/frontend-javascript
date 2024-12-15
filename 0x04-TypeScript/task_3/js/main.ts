/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "crud"; // Import everything from crud.js

// Create an object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert a row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row with the new ID and updated data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the new row ID
CRUD.deleteRow(newRowID);
