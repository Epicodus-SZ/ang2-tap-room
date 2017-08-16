"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mock_kegs_1 = require("./mock-kegs");
var core_1 = require("@angular/core");
var KegService = (function () {
    function KegService() {
    }
    KegService.prototype.getKegs = function () {
        return Promise.resolve(mock_kegs_1.KEGS);
    };
    KegService.prototype.getKegsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getKegs()); }, 2000);
        });
    };
    KegService.prototype.getKeg = function (id) {
        return this.getKegs()
            .then(function (kegs) { return kegs.find(function (keg) { return keg.id === id; }); });
    };
    return KegService;
}());
KegService = __decorate([
    core_1.Injectable()
], KegService);
exports.KegService = KegService;
//# sourceMappingURL=keg.service.js.map