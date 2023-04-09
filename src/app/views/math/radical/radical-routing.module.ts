import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadicalComponent } from './radical.component';

const routes: Routes = [{ path: '', component: RadicalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadicalRoutingModule { }
