import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrizRoutingModule } from './matriz-routing.module';
import { MatrizComponent } from './matriz.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MathTemplateModule } from '../../template/math/math.module';


@NgModule({
  declarations: [
    MatrizComponent
  ],
  imports: [
    CommonModule,
    MatrizRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MathTemplateModule
  ]
})
export class MatrizModule { }
