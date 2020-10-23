/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/admin/category_create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin/category_create.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/category_create.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const app = new Vue({\r\n  el: '#app',\r\n\r\n  data: {\r\n    rawCategories: categories,\r\n    inputTypeOptions,\r\n    filterTypes: filterTypeOptions,\r\n\r\n    // Category object which will be sent to the backend\r\n    category: {\r\n      categoryId: '',\r\n      name: '',\r\n      description: '',\r\n      seoDescription: '',\r\n      isLeaf: false,\r\n      properties: []\r\n    }\r\n  },\r\n\r\n  methods: {\r\n    saveCategory: function () {\r\n      console.log(JSON.stringify(this.category))\r\n      axios.post('/api/v1/category', this.category)\r\n        .then(result => {\r\n          // console.log(result)\r\n          // console.log(result.data)\r\n          window.location.href = '/category'\r\n        })\r\n    },\r\n\r\n    // Property methods\r\n    addNewProperty: function () {\r\n      const categoryObject = {\r\n        name: '',\r\n        required: true,\r\n        hasUnits: false,\r\n        filterable: false,\r\n        filterChoices: [],\r\n        units: [],\r\n        input: {\r\n          type: 'fractionalNumber',\r\n          propertyChoices: []\r\n        }\r\n      }\r\n      this.category.properties.push(categoryObject)\r\n    },\r\n\r\n    removeProperty: function (index) {\r\n      this.category.properties.splice(index, 1)\r\n    },\r\n\r\n    // Input Choices methods\r\n    addNewChoice: function (property) {\r\n      const choiceObject = {\r\n        name: '',\r\n        value: ''\r\n      }\r\n\r\n      property.input.propertyChoices.push(choiceObject)\r\n    },\r\n\r\n    removeChoice: function (index, property) {\r\n      property.input.propertyChoices.splice(index, 1)\r\n    },\r\n\r\n    // Units\r\n    addUnit: function (property) {\r\n      const unitObject = {\r\n        label: '',\r\n        printLabel: '',\r\n        threshold: 10,\r\n        nextLabel: ''\r\n      }\r\n\r\n      property.units.push(unitObject)\r\n    },\r\n\r\n    removeUnit: function (index, units) {\r\n      units.splice(index, 1)\r\n    },\r\n\r\n    // Filters\r\n    addFilter: function (property) {\r\n      const filterObject = {\r\n        label: '',\r\n        printLabel: '',\r\n        type: ''\r\n      }\r\n      property.filterChoices.push(filterObject)\r\n    },\r\n\r\n    removeFilter: function (index, property) {\r\n      property.filterChoices.splice(index, 1)\r\n    }\r\n  },\r\n\r\n  computed: {\r\n    categories: function () {\r\n      const prefixParentName = (category) => {\r\n        if (!category.processed && category.categoryId) {\r\n          const parentCategory = this.rawCategories.find(c => c._id === category.categoryId)\r\n          if (parentCategory.categoryId && !parentCategory.processed) {\r\n            prefixParentName(parentCategory)\r\n          }\r\n          category.name = parentCategory.name + ' > ' + category.name\r\n          category.processed = true\r\n        }\r\n      }\r\n\r\n      return this.rawCategories.map(category => {\r\n        prefixParentName(category)\r\n        return category\r\n      })\r\n    }\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack:///./resources/js/admin/category_create.js?");

/***/ })

/******/ });