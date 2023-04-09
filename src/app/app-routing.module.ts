import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   { path: '', loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule) },
   { path: 'arithmetic', loadChildren: () => import('./views/math/arithmetic/arithmetic.module').then(m => m.ArithmeticModule) },
   { path: 'radical', loadChildren: () => import('./views/math/radical/radical.module').then(m => m.RadicalModule) },
   { path: 'matriz', loadChildren: () => import('./views/math/matriz/matriz.module').then(m => m.MatrizModule) },
   { path: 'function', loadChildren: () => import('./views/math/function/function.module').then(m => m.FunctionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
