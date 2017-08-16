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
var core_1 = require("@angular/core");
var keg_service_1 = require("./keg.service");
var TRListComponent = (function () {
    function TRListComponent(
        //  private router: Router,
        kegService) {
        this.kegService = kegService;
        this.kegClick = new core_1.EventEmitter();
    }
    //method to get all kegs from DB
    TRListComponent.prototype.getKegs = function () {
        var _this = this;
        this.kegService.getKegs().then(function (kegs) { return _this.kegs = kegs; });
    };
    // This method is run when component initializes
    TRListComponent.prototype.ngOnInit = function () {
        this.getKegs();
    };
    TRListComponent.prototype.editButtonHasBeenClicked = function (kegToEdit) {
        this.kegClick.emit(kegToEdit);
    };
    TRListComponent.prototype.gotoDetail = function () {
        //  this.router.navigate(['/detail', this.selectedKeg.id]);
    };
    return TRListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TRListComponent.prototype, "kegClick", void 0);
TRListComponent = __decorate([
    core_1.Component({
        selector: 'tr-list',
        templateUrl: './templates/tr-list.component.html',
        styleUrls: ['./css/app.component.css']
    }),
    __metadata("design:paramtypes", [keg_service_1.KegService])
], TRListComponent);
exports.TRListComponent = TRListComponent;
//# sourceMappingURL=tr-list.component.js.map