/**
 * Created by MCKM on 2017-10-16.
 */
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {TestComp1Component} from "./test-comp-1/test-comp-1.component";
import {TestComp2Component} from "./test-comp-2/test-comp-2.component";

const PAGES_COMPONENTS = [
  PagesComponent,
  TestComp1Component,
  TestComp2Component
];

@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
