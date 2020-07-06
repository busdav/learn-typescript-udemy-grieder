"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// The get request will be async, which means we'll get back a promise. In order to get notified when the request is complete,
// we can chain on a `.then` statement which will be called with the response once we get the response from the API.
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
