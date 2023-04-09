import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../guards/auth.guard';
import { UserPeople } from '../model/userPeople.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  redirect: boolean = true;

  constructor(
    private userService: UserService,
    private authGuard: AuthGuard,

    private httpClient: HttpClient,
    private router: Router,
  ) {

  }

  public authorization(params: any) {
    this.httpClient.post(environment.API_URL + '/login', JSON.stringify(params)).subscribe(
      (resp) => {
        let token = JSON.parse(JSON.stringify(resp)).Authorization.split(' ')[1];
        localStorage.setItem('token', token);
        localStorage.setItem('username', params.username);
        this.router.navigate(['math']);
      }
    );

  }

  public auth(form: FormGroup) {
    return this.httpClient.post(environment.API_URL + '/login', JSON.stringify(form.value));
  }

  public registerAuthGuardByFormGroup(forms: FormGroup) {
    return this.registerAuthGuardByUsername(forms.value.username);
  }

  private registerAuthGuardByUsername(username: string) {
    return this.userService.findByUsername(username)
      .pipe(catchError(err => of(this.authGuard.getPerson())))
      .subscribe({
        next: (resp) => this.authGuard.set(resp, true),
        error: (err) => this.authGuard.set(err, false),
        complete: () => this.authGuard.redirect(this.redirect),
      });
  }

  public person(): UserPeople{
    return this.authGuard.getPerson();
  }

  public verifyUserRefresh(){
    const token = localStorage.getItem('token');
    const usRG = localStorage.getItem('usRG');
    if(token != null && usRG != null){
      const person = this.person();
      if(!person.enabled){
        this.redirect = false;
        this.registerAuthGuardByUsername(usRG);
      }
    }
  }

}
