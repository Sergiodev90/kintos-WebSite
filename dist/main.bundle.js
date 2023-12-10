/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var aside_mobile = document.querySelector(\".background-menu-mobile\");\nvar aside_mobile_second = document.querySelector(\".mobile-menu\");\nvar icon_menu = document.querySelector(\".icon-menu-d\");\nvar icon_menu_aside = document.querySelector(\".icon-menu-mobile\");\nvar background_mobile_gray = document.querySelector(\".background-menu-mobile-Father\");\nvar contacts__Mobile = document.querySelector(\".contacts-mobile-click \");\nvar arrow_down = document.querySelector(\".icon-menu-contacts\");\nicon_menu.addEventListener(\"click\", ShowAside);\nicon_menu_aside.addEventListener(\"click\", toggleAside);\narrow_down.addEventListener(\"click\", ShowContacts);\n// background_mobile_gray.addEventListener(\"click\",toggleAside)\nfunction ShowAside() {\n  aside_mobile.classList.toggle(\"inactive\");\n  aside_mobile_second.classList.toggle(\"inactive\");\n  background_mobile_gray.classList.toggle(\"inactive\");\n}\nfunction toggleAside() {\n  AsideClosedContainer = aside_mobile.classList.contains(\"inactive\");\n  AsideClosedSon = aside_mobile_second.classList.contains(\"inactive\");\n  if (!AsideClosedContainer && !AsideClosedSon) {\n    aside_mobile.classList.add(\"inactive\");\n    aside_mobile_second.classList.add(\"inactive\");\n    background_mobile_gray.classList.add(\"inactive\");\n  }\n}\nfunction ShowContacts() {\n  contacts__Mobile.classList.toggle(\"inactive\");\n}\n\n// Función para abrir y cerrar la sección de la galería\n// Función para abrir y cerrar la sección de la galería\n// function toggleSections() {\n//   const galleryLink = document.getElementById(\"galleryLink\");\n//   const HomeLink = document.getElementById(\"HomeLink\")\n//   const NoticesLink = document.getElementById(\"noticeLink\")\n//   const body = document.body;\n\n//   // Agregar o quitar la clase 'gallery-open' al enlace y al cuerpo del documento\n//   galleryLink.classList.toggle(\"gallery-open\");\n//   body.classList.toggle(\"gallery-open\");\n//   HomeLink.classList.toggle(\"home-open\");\n//   body.classList.toggle(\"home-open\");\n//   NoticesLink.classList.toggle(\"noticesLink\");\n//   body.classList.toggle(\"noticesLink\");\n// }\n\n//# sourceURL=webpack://kinto-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;