"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemas */ \"./pages/api/schemas/index.js\");\n/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolver */ \"./pages/api/resolver/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/*Graphql server'ının apollo server'ının bulunduğu uri\nhttp://localhost:3000/api/graphql */\n\n\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  typeDefs: _schemas__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n  resolvers: _resolver__WEBPACK_IMPORTED_MODULE_2__.resolvers,\n  context: async () => {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_3___default().connections[0].readyState)) return;\n    await mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGODB_URI, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    }).then(() => {\n      console.log(`Mongodb Connected`);\n    }).catch(error => {\n      console.error(`${error.reason}`);\n    });\n  }\n});\nconst config = {\n  api: {\n    bodyParser: false // body kısmını parse etme next.js yapsın\n\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apolloServer.createHandler({\n  path: \"/api/graphql\"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1JLFlBQVksR0FBRyxJQUFJSiw2REFBSixDQUFpQjtBQUNoQ0MsRUFBQUEsUUFEZ0M7QUFFaENDLEVBQUFBLFNBRmdDO0FBR2hDRyxFQUFBQSxPQUFPLEVBQUUsWUFBWTtBQUNsQixRQUFHRiwyRUFBSCxFQUF1QztBQUN2QyxVQUFNQSx1REFBQSxDQUFpQk0sT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxJQUFsQjtBQUF3QkMsTUFBQUEsa0JBQWtCLEVBQUU7QUFBNUMsS0FBMUMsRUFDTEMsSUFESyxDQUNBLE1BQUs7QUFDUEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsbUJBQWI7QUFDSCxLQUhLLEVBR0hDLEtBSEcsQ0FHR0MsS0FBSyxJQUFJO0FBQ2RILE1BQUFBLE9BQU8sQ0FBQ0csS0FBUixDQUFlLEdBQUVBLEtBQUssQ0FBQ0MsTUFBTyxFQUE5QjtBQUNILEtBTEssQ0FBTjtBQU1GO0FBWCtCLENBQWpCLENBQXJCO0FBY08sTUFBTUMsTUFBTSxHQUFHO0FBQ2xCQyxFQUFBQSxHQUFHLEVBQUU7QUFDREMsSUFBQUEsVUFBVSxFQUFFLEtBRFgsQ0FDaUI7O0FBRGpCO0FBRGEsQ0FBZjtBQU1OLGlFQUFlbEIsWUFBWSxDQUFDbUIsYUFBYixDQUEyQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUEzQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwb2xsby1zZXJ2ZXIvLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcz83NDI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qR3JhcGhxbCBzZXJ2ZXInxLFuxLFuIGFwb2xsbyBzZXJ2ZXInxLFuxLFuIGJ1bHVuZHXEn3UgdXJpXG5odHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWwgKi9cblxuaW1wb3J0IHtBcG9sbG9TZXJ2ZXJ9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nO1xuaW1wb3J0IHt0eXBlRGVmc30gZnJvbSAnLi9zY2hlbWFzJztcbmltcG9ydCB7cmVzb2x2ZXJzfSBmcm9tICcuL3Jlc29sdmVyJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgICAgdHlwZURlZnMsXG4gICAgICByZXNvbHZlcnMsXG4gICAgICBjb250ZXh0OiBhc3luYyAoKSA9PiB7XG4gICAgICAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KVxuICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coYE1vbmdvZGIgQ29ubmVjdGVkYCk7XG4gICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnJvci5yZWFzb259YCk7XG4gICAgICAgICB9KVxuICAgICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2UgLy8gYm9keSBrxLFzbcSxbsSxIHBhcnNlIGV0bWUgbmV4dC5qcyB5YXBzxLFuXG4gICAgfVxufVxuXG4gZXhwb3J0IGRlZmF1bHQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiBcIi9hcGkvZ3JhcGhxbFwifSkiXSwibmFtZXMiOlsiQXBvbGxvU2VydmVyIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJtb25nb29zZSIsImFwb2xsb1NlcnZlciIsImNvbnRleHQiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwicmVhc29uIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.js\n");

/***/ }),

/***/ "./pages/api/models/User.js":
/*!**********************************!*\
  !*** ./pages/api/models/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  name: String,\n  age: String\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbW9kZWxzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxVQUFVLEdBQUcsSUFBSUQsNENBQUosQ0FBVztBQUMxQkUsRUFBQUEsSUFBSSxFQUFFQyxNQURvQjtBQUUxQkMsRUFBQUEsR0FBRyxFQUFFRDtBQUZxQixDQUFYLENBQW5CO0FBSUFKLHdEQUFBLEdBQWtCLEVBQWxCO0FBQ08sTUFBTU8sSUFBSSxHQUFHUCxxREFBQSxDQUFlLE1BQWYsRUFBdUJFLFVBQXZCLENBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLXNlcnZlci8uL3BhZ2VzL2FwaS9tb2RlbHMvVXNlci5qcz9lZmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBhZ2U6IFN0cmluZyxcbn0pXG5tb25nb29zZS5tb2RlbHMgPSB7fTtcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VyU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImFnZSIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/models/User.js\n");

/***/ }),

/***/ "./pages/api/resolver/index.js":
/*!*************************************!*\
  !*** ./pages/api/resolver/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./pages/api/models/User.js\");\n\nconst resolvers = {\n  Query: {\n    users: () => {\n      return [{\n        id: 'apollo',\n        name: 'Melisa',\n        age: 25\n      }];\n    }\n  },\n  Mutation: {\n    createUser: async (parent, {\n      name,\n      age\n    }, ctx, info) => {\n      const user = new _models_User__WEBPACK_IMPORTED_MODULE_0__.User({\n        name,\n        age\n      });\n      return await user.save();\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVzb2x2ZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVPLE1BQU1DLFNBQVMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0hDLElBQUFBLEtBQUssRUFBRSxNQUFNO0FBQ1QsYUFBTyxDQUFDO0FBQ0pDLFFBQUFBLEVBQUUsRUFBRSxRQURBO0FBRUpDLFFBQUFBLElBQUksRUFBRSxRQUZGO0FBR0pDLFFBQUFBLEdBQUcsRUFBRTtBQUhELE9BQUQsQ0FBUDtBQUtIO0FBUEUsR0FEYztBQVdyQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFVBQVUsRUFBRSxPQUFPQyxNQUFQLEVBQWU7QUFBQ0osTUFBQUEsSUFBRDtBQUFPQyxNQUFBQTtBQUFQLEtBQWYsRUFBNEJJLEdBQTVCLEVBQWlDQyxJQUFqQyxLQUEwQztBQUNsRCxZQUFNQyxJQUFJLEdBQUcsSUFBSVosOENBQUosQ0FBUztBQUNsQkssUUFBQUEsSUFEa0I7QUFFbEJDLFFBQUFBO0FBRmtCLE9BQVQsQ0FBYjtBQUtBLGFBQU8sTUFBTU0sSUFBSSxDQUFDQyxJQUFMLEVBQWI7QUFDSDtBQVJLO0FBWFcsQ0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLXNlcnZlci8uL3BhZ2VzL2FwaS9yZXNvbHZlci9pbmRleC5qcz80ZmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL1VzZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgaWQ6ICdhcG9sbG8nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZWxpc2EnLFxuICAgICAgICAgICAgICAgIGFnZTogMjVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIGNyZWF0ZVVzZXI6IGFzeW5jIChwYXJlbnQsIHtuYW1lLCBhZ2V9LCBjdHgsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBhZ2UsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJVc2VyIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJ1c2VycyIsImlkIiwibmFtZSIsImFnZSIsIk11dGF0aW9uIiwiY3JlYXRlVXNlciIsInBhcmVudCIsImN0eCIsImluZm8iLCJ1c2VyIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/resolver/index.js\n");

/***/ }),

/***/ "./pages/api/schemas/index.js":
/*!************************************!*\
  !*** ./pages/api/schemas/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n // schema definition language'i kullanıyor olacağiz\n\n/* typeDefs'lar nelerdir?\n   Uygulama içindeki datanın nasıl görüneceğini belirlediğimiz\n   definitionlarını yazdığımız alan\n*/\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n    type Query {\n        users: [User!]!\n    }\n\n    type User {\n        id: ID!\n        name: String!\n        age: String!\n    }\n\n    type Mutation {\n        createUser(name: String!, age: String!): User!\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2NoZW1hcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Q0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFFBQVEsR0FBSUQsb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwb2xsby1zZXJ2ZXIvLi9wYWdlcy9hcGkvc2NoZW1hcy9pbmRleC5qcz82NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiAgLy8gc2NoZW1hIGRlZmluaXRpb24gbGFuZ3VhZ2UnaSBrdWxsYW7EsXlvciBvbGFjYcSfaXpcblxuLyogdHlwZURlZnMnbGFyIG5lbGVyZGlyP1xuICAgVXlndWxhbWEgacOnaW5kZWtpIGRhdGFuxLFuIG5hc8SxbCBnw7Zyw7xuZWNlxJ9pbmkgYmVsaXJsZWRpxJ9pbWl6XG4gICBkZWZpbml0aW9ubGFyxLFuxLEgeWF6ZMSxxJ/EsW3EsXogYWxhblxuKi9cblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gIGdxbGBcbiAgICB0eXBlIFF1ZXJ5IHtcbiAgICAgICAgdXNlcnM6IFtVc2VyIV0hXG4gICAgfVxuXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICBuYW1lOiBTdHJpbmchXG4gICAgICAgIGFnZTogU3RyaW5nIVxuICAgIH1cblxuICAgIHR5cGUgTXV0YXRpb24ge1xuICAgICAgICBjcmVhdGVVc2VyKG5hbWU6IFN0cmluZyEsIGFnZTogU3RyaW5nISk6IFVzZXIhXG4gICAgfVxuYDtcbiJdLCJuYW1lcyI6WyJncWwiLCJ0eXBlRGVmcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/schemas/index.js\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();