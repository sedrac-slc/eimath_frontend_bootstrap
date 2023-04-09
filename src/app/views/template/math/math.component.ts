import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { GroupPage } from 'src/app/model/grupoPage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-math-template',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})

export class MathTemplateComponent implements OnInit{
  person: UserPeople = new UserPeople;
  action: string = "create";

  groupPage: GroupPage = new GroupPage();

  constructor(
    private router: Router,
    private authGuard: AuthGuard,
    private groupService: GroupService
  ){
    this.person = this.authGuard.getPerson();
  }

  ngOnInit(): void {
    script(document);
  }

  logaut(){
    localStorage.removeItem('token');
    localStorage.removeItem('usRG');
    this.authGuard.set(new UserPeople(),false);
    this.router.navigate(['/']);
  }

  openGrupoPainel(action: string){
    this.action = action;
    if(this.action == 'view'){
      this.groupService.pageGroupsByUserId(this.person.id)
          .pipe(catchError(err => of(this.groupPage)))
          .subscribe( (resp) => {this.groupPage = resp;});
    }
  }


  viewOrCloseHeaderInfo(): void{
    const headerInfo = document.querySelector("#header-info");
    const icon = document.querySelector("#header-icon");
    const visionMsg = document.querySelector("#header-msg");
    if(headerInfo!.classList.contains('d-none')){
      visionMsg!.innerHTML = "ocultar";
      headerInfo!.classList.remove("d-none");
      icon!.className = 'bx bx-low-vision bx-tada';
    }else{
      visionMsg!.innerHTML = "mostra";
      headerInfo!.classList.add("d-none");
      icon!.className = 'bx bx-show bx-tada';
    }
  }

  getGroup(){
    this.action = 'view';
  }

}

function script(doc: Document){
  "use strict";

  let items = doc.querySelectorAll('.topico-down-up');

  items.forEach(item => {
    item.addEventListener('click',function(e){
      const body = item.parentElement?.parentElement?.querySelector('.topico-body');
      if(body){
        body.classList.toggle('d-none');
        const icon = item.querySelector('i');

        if(icon){
          if(icon.classList.contains('bx-caret-down-circle')){
            icon.classList.remove('bx-caret-down-circle');
            icon.classList.add('bx-caret-up-circle');
          }else{
            if(icon.classList.contains('bx-caret-up-circle')){
              icon.classList.remove('bx-caret-up-circle');
              icon.classList.add('bx-caret-down-circle');
            }
          }
        }
      }
    });
  });

};
