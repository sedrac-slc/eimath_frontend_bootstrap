import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathResponse } from 'src/app/model/math.model';
import { RadicalService } from 'src/app/service/radical.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-radical',
  templateUrl: './radical.component.html',
  styleUrls: ['./radical.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadicalComponent  implements OnInit{
  mathResult: MathResponse = new MathResponse();
  radicalForm!: FormGroup;

  constructor(
    private radicalService: RadicalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.radicalForm = this.formBuilder.group({
      expression: ['', Validators.required],
    });

  }

  solve() {
    if (this.radicalForm.valid) {
      this.radicalService
          .solve(this.radicalForm.value.expression)
          .subscribe((response) => this.mathResult = response);
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
