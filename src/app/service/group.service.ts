import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../model/grupo.model';
import Swal from 'sweetalert2';
import { GroupPage } from '../model/grupoPage.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
     'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(private httpClient: HttpClient) { }

  public store(uuid: string, groups: string[]): Observable<any>{
    return this.httpClient.post(environment.API_URL+'/groups/'+uuid, groups, {
      headers: this.httpHeaders,
    });
  }

  public update(group: Group): Observable<any>{
    return this.httpClient.put(environment.API_URL+'/groups', group, {
      headers: this.httpHeaders,
    });
  }

  public remove(group: Group): Observable<any>{
    return this.httpClient.delete(environment.API_URL+'/groups/'+group.id, {
      headers: this.httpHeaders,
    });
  }

  public groupsByUserId(uuid: string): Observable<Group[]>{
    return this.httpClient.get<Group[]>(`${environment.API_URL}/users/groups/${uuid}`, {
      headers: this.httpHeaders
    });
  }

  public pageGroupsByUserId(uuid: string, page: number = 0): Observable<GroupPage>{
    return this.httpClient.get<GroupPage>(`${environment.API_URL}/groups/page?people=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

}
