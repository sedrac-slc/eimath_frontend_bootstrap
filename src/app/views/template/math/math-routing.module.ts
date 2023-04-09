import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathTemplateComponent } from './math.component';

const routes: Routes = [{ path: '', component: MathTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
