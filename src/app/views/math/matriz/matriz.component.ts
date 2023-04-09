import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathResponse } from 'src/app/model/math.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit{
  mathResult: MathResponse = new MathResponse();
  matrizForm!: FormGroup;

  constructor(
   // private radicalService: RadicalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.matrizForm = this.formBuilder.group({
      expression: ['', Validators.required],
    });

  }

  solve() {
    if (this.matrizForm.valid) {

     }else{
       Swal.fire({
         icon: 'warning',
         title: 'Validação',
         text: 'Por verifica se os campos foram bem preenchidos!',
         footer: '<a class="b-n" href="/">Voltar a página principal?</a>'
       });
     }
   }

}
