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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var keg_service_1 = require("./keg.service");
var KegDetailComponent = (function () {
    function KegDetailComponent(kegService, route, location) {
        this.kegService = kegService;
        this.route = route;
        this.location = location;
    }
    KegDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.kegService.getKeg(+params.get('id')); })
            .subscribe(function (keg) { return _this.keg = keg; });
    };
    KegDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return KegDetailComponent;
}());
KegDetailComponent = __decorate([
    core_1.Component({
        selector: 'keg-detail',
        templateUrl: './templates/keg-detail.component.html',
        styleUrls: ['./css/keg-detail.component.css']
    }),
    __metadata("design:paramtypes", [keg_service_1.KegService,
        router_1.ActivatedRoute,
        common_1.Location])
], KegDetailComponent);
exports.KegDetailComponent = KegDetailComponent;
//# sourceMappingURL=tr-details.component.js.map