import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../guards/auth.guard';
import { UserPeople } from '../model/userPeople.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpClient: HttpClient, private auth: AuthGuard, private router: Router) {}

  findByUsername(username: string): Observable<UserPeople> {
    return this.httpClient.get<UserPeople>(`${environment.API_URL}/users/username/${username}`,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  }


}
