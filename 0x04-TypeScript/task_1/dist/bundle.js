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

eval("\n// Class implementation based on the interfaces\nvar StudentClassImpl = /** @class */ (function () {\n    // Constructor accepts firstName and lastName as arguments\n    function StudentClassImpl(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    // Method that returns a string message\n    StudentClassImpl.prototype.workOnHomework = function () {\n        return \"Currently working\";\n    };\n    // Method that returns the first name of the student\n    StudentClassImpl.prototype.displayName = function () {\n        return this.firstName;\n    };\n    return StudentClassImpl;\n}());\n// Example usage\nvar student1 = new StudentClassImpl(\"John\", \"Doe\");\nconsole.log(student1.displayName()); // Should print: John\nconsole.log(student1.workOnHomework()); // Should print: Currently working\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?");

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