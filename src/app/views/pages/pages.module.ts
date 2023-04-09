import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathComponent } from './math/math.component';
import { MathTemplateModule } from '../template/math/math.module';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        MathComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        MathTemplateModule,
    ]
})

export class PagesModule { }
