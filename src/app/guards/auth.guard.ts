import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserPeople } from '../model/userPeople.model';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private person: UserPeople = new UserPeople();
  isAuth: boolean = false;

  constructor(private router: Router) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = localStorage.getItem('token');
    if(token == null){
      this.router.navigate(['login']);
    }
    this.router.navigate(['math']);
    return true;
  }

  public set(person : UserPeople, isAuth: boolean) {
    this.person = person;
    this.isAuth = isAuth;

    if(this.isAuth){
      localStorage.setItem("usRG", this.person.username);
    }

  }

  public getPerson() : UserPeople{
    return this.person;
  }

  public redirect(state: boolean){
    if(state){
      let view = this.isAuth ? 'math' : 'login';
      this.router.navigate([view]);
    }
  }



}
