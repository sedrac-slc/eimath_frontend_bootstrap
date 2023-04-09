import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArithmeticRoutingModule } from './arithmetic-routing.module';
import { ArithmeticComponent } from './arithmetic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MathTemplateModule } from '../../template/math/math.module';
import { MethodsComponent } from './methods/methods.component';

@NgModule({
  declarations: [
    ArithmeticComponent,
    MethodsComponent
  ],
  imports: [
    CommonModule,
    ArithmeticRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MathTemplateModule
  ]
})

export class ArithmeticModule { }
