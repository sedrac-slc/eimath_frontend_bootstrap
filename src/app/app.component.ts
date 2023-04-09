import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'eimath_frontend_bootstrap';

  constructor(loginService: LoginService){
    loginService.verifyUserRefresh();
  }

  ngOnInit(): void {

  }

}
