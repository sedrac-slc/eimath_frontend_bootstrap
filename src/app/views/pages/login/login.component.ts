import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  isNotValidAndTouched(name: string){
    const view = this.formulario.get(name);
    return !view?.valid && view?.touched;
  }

  isValidAndTouched(name: string){
    const view = this.formulario.get(name);
    return view?.valid && view?.touched;
  }

  valiationFormControl(name: string){
    return {
      'is-invalid': this.isNotValidAndTouched(name),
      'is-valid': this.isValidAndTouched(name)
    }
  }

  onSubmit() {
    if (this.formulario.valid)
      this.auth();
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Validação',
        text: 'Por verifica se os campos foram bem preenchidos!',
        footer: '<a href="/">Voltar a página principal?</a>'
      });
    }
  }


  auth() {
     this.loginService.redirect = true;
     this.loginService.auth(this.formulario).subscribe({
        next: (resp) => {
          let expression: string = JSON.parse(JSON.stringify(resp)).Authorization;
          let arrayKeys: string[] = expression.split(' ');
          localStorage.setItem('token', arrayKeys[1]);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Autentição negada',
            text: 'Verifica as credências!',
            footer: '<a href="/">Voltar a página principal?</a>'
          });
          localStorage.removeItem('token');
          localStorage.removeItem('usRG');
        }
      });

      if(localStorage.getItem('token')){
        if(this.formulario.value.username != null){
          this.loginService.redirect = true;
          this.loginService.registerAuthGuardByFormGroup(this.formulario);
        }
      }

  }

}
