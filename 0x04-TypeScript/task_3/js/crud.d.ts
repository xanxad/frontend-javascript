/// <reference path="interface.ts" />

// Declare the functions in CRUD module and their types
declare module "crud" {
  import { RowID, RowElement } from "./interface";

  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
