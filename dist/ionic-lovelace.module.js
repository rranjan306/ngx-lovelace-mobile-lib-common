import { NgModule, ModuleWithProviders } from '@angular/core';
import { AcademyComponent } from './components/message-component';
import { AcademyProvider } from './providers/message-provider';
import { IonicModule } from 'ionic-angular';
var IonicAcademyModule = /** @class */ (function () {
    function IonicAcademyModule() {
    }
    IonicAcademyModule.forRoot = function () {
        return {
            ngModule: IonicAcademyModule,
            providers: [AcademyProvider]
        };
    };
    return IonicAcademyModule;
}());
export { IonicAcademyModule };
//# sourceMappingURL=ionic-lovelace.module.js.map