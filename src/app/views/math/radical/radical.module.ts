import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadicalRoutingModule } from './radical-routing.module';
import { RadicalComponent } from './radical.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MathTemplateModule } from '../../template/math/math.module';
import { ExemploComponent } from './exemplo/exemplo.component';


@NgModule({
  declarations: [
    RadicalComponent,
    ExemploComponent
  ],
  imports: [
    CommonModule,
    RadicalRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MathTemplateModule
  ]
})
export class RadicalModule { }
