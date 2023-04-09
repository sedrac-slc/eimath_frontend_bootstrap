import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticComponent } from './arithmetic.component';

const routes: Routes = [{ path: '', component: ArithmeticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArithmeticRoutingModule { }
