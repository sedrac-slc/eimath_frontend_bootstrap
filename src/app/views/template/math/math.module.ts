import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MathRoutingModule } from './math-routing.module';
import { MathTemplateComponent } from './math.component';
import { GroupComponent } from './group/group.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MathTemplateComponent,
    GroupComponent
  ],
  exports: [
    MathTemplateComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    MathRoutingModule
  ]
})
export class MathTemplateModule { }
