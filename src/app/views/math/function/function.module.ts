import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionRoutingModule } from './function-routing.module';
import { FunctionComponent } from './function.component';
import { MathTemplateModule } from '../../template/math/math.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FunctionComponent
  ],
  imports: [
    CommonModule,
    FunctionRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MathTemplateModule
  ]
})
export class FunctionModule { }
