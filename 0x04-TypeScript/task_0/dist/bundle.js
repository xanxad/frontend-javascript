/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nvar student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 21,\n    location: \"New York\",\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Los Angeles\",\n};\nvar studentsList = [student1, student2];\n// Render table\nvar body = document.querySelector(\"body\");\nvar table = document.createElement(\"table\");\nvar tbody = document.createElement(\"tbody\");\nstudentsList.forEach(function (student) {\n    var row = document.createElement(\"tr\");\n    var cellName = document.createElement(\"td\");\n    var cellLocation = document.createElement(\"td\");\n    cellName.textContent = student.firstName;\n    cellLocation.textContent = student.location;\n    row.appendChild(cellName);\n    row.appendChild(cellLocation);\n    tbody.appendChild(row);\n});\ntable.appendChild(tbody);\nbody === null || body === void 0 ? void 0 : body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;