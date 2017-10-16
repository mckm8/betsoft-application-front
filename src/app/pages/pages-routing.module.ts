import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {Routes, RouterModule} from "@angular/router";
import {TestComp1Component} from "./test-comp-1/test-comp-1.component";
import {TestComp2Component} from "./test-comp-2/test-comp-2.component";


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'test1',
    component: TestComp1Component,
  }, {
    path: 'test2',
    component: TestComp2Component,
  }, {
    path: '',
    redirectTo: 'test1',
    pathMatch: 'full',
  }],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
