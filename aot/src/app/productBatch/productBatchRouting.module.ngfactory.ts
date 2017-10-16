/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/productBatch/productBatchRouting.module';
import * as import2 from '@angular/router';
import * as import3 from './productBatchsAdmin.component.ngfactory';
import * as import4 from '../../../../src/app/productBatch/productBatchsAdmin.component';
import * as import5 from '../../../../src/app/admin/services/adminGuard';
class ProductBatchRoutingInjector extends import0.ɵNgModuleInjector<import1.ProductBatchRouting> {
  _RouterModule_0:import2.RouterModule;
  _ProductBatchRouting_1:import1.ProductBatchRouting;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.ProductBatchsAdminComponentNgFactory],([] as any[]));
  }
  createInternal():import1.ProductBatchRouting {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._ProductBatchRouting_1 = new import1.ProductBatchRouting();
        this._ROUTES_2 = [[{
          path: '',
          component: import4.ProductBatchsAdminComponent,
          canActivate: [import5.AdminGuardService]
        }
    ]];
    return this._ProductBatchRouting_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.ProductBatchRouting)) { return this._ProductBatchRouting_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ProductBatchRoutingNgFactory:import0.NgModuleFactory<import1.ProductBatchRouting> = new import0.NgModuleFactory<any>(ProductBatchRoutingInjector,import1.ProductBatchRouting);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC9wcm9kdWN0QmF0Y2gvcHJvZHVjdEJhdGNoUm91dGluZy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvYWxhbi9hcHAvYWxlcy9zYWxvbi9zcmMvYXBwL3Byb2R1Y3RCYXRjaC9wcm9kdWN0QmF0Y2hSb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=