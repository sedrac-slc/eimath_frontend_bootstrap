import { Component, OnInit, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Group } from 'src/app/model/grupo.model';
import { GroupPage } from 'src/app/model/grupoPage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GroupService } from 'src/app/service/group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupName = "";
  listNameGroups: string[] = [];
  groupSelected: Group = new Group();

  private posFind: number = 0;

  @Input() groupPage: GroupPage = new GroupPage();

  @Input() person: UserPeople = new UserPeople();

  @Input() view: string = "create";

  constructor(private groupService: GroupService) {

  }

  ngOnInit(): void {

  }

  push() {
    this.groupName = this.groupName.trim();
    if (this.groupName !== "") {
      let exists = this.listNameGroups.includes(this.groupName);
      if (!exists)
        this.listNameGroups.push(this.groupName);
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Validação',
          text: 'Nome já esta incluida na lista!',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Validação',
        text: 'Preencha o campo!',
      });
    }

  }

  storeGroups() {
    this.groupService.store(this.person.id, this.listNameGroups).subscribe((resp) => {
    });
    this.listNameGroups = [];
  }

  refreshPage(page: number) {
    this.groupService.pageGroupsByUserId(this.person.id, page)
      .pipe(catchError(err => of(this.groupPage)))
      .subscribe((resp) => { this.groupPage = resp; });
  }

  selectedGroup(identy: string, deleteGroup: boolean) {
    const length = this.groupPage.content.length;

    for (let i = 0; i < length; i++)
      if (this.groupPage.content[i].id == identy) {
        this.groupSelected.id = this.groupPage.content[i].id;
        this.groupSelected.name = this.groupPage.content[i].name;
        this.groupSelected.userPeople = this.groupPage.content[i].userPeople;
        this.posFind = i;
        break;
      }

    if(deleteGroup){
      Swal.fire({
        title: 'Atenção?',
        text: "Tenha cuidado com esta operação é irrenversivel!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, confirmo!',
        cancelButtonText: 'Não, cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          const row = document.querySelector("#row-"+this.posFind);
          if(row) row.remove();
          this.groupService.remove(this.groupSelected).subscribe( (resp)=> { });
          Swal.fire(
            'Eliminação!',
            'operação realizada com successo.',
            'success'
          );
        }
      })
    }

  }

  updateGroup() {
    this.groupService.update(this.groupSelected)
      .subscribe({
        next: (resp) => {
          this.groupSelected = resp;
          this.groupPage.content[this.posFind] = resp;
          Swal.fire({
            icon: 'success',
            title: 'Actualização',
            text: 'Realizado com successo o processo de actualização!',
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Actualização',
            text: 'Não foi possível o processo de actualização!',
          });
        }
      });
  }

  convite(identy: string){
    //this.selectedGroup(identy,false);

    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup()!.querySelector('#login')?.getAttribute('value')
        const password = Swal.getPopup()!.querySelector('#password')?.getAttribute('value')
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value!.login}
        Password: ${result.value!.password}
      `.trim())
    })


  }

  clear(){
    this.groupSelected = new Group();
  }


}
