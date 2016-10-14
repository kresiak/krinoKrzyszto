"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    // Our primary method. It accepts the name of the api request we want to make, an item if the request is a post request and the id if required
    ApiService.prototype.send = function (name, item, id) {
        var url, // The url that we should post to 
        type, // Type of the request ['post', 'put', 'get', 'delete']
        body; // Body of the request
        // Set the right url using the provided name
        switch (name) {
            // Get all users
            case 'getSuppliers':
                url = 'http://localhost:1337/data/Suppliers';
                type = http_1.RequestMethod.Get;
                break;
        }
        // Define the options for the request
        var options = {
            method: type,
            url: url,
            body: null,
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        };
        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item) {
            body = typeof item === 'string' ? item : JSON.stringify(item);
            options.body = body;
        }
        // Returns an observable 
        return this._http.request(new http_1.Request(options))
            .map(function (res) { return res.json(); })
            .catch(this.logError);
    };
    // Error handling 
    ApiService.prototype.logError = function (error) {
        return Observable_1.Observable.throw(error || 'There was an error with the request');
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map