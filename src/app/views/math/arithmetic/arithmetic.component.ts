import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArithmeticService } from 'src/app/service/arithmetic.service';
import { MathResponse } from '../../../model/math.model';
import Swal from 'sweetalert2';
import 'src/assets/ts/topico_down_up';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ArithmeticComponent implements OnInit {
  mathResult: MathResponse = new MathResponse();
  arithmeticForm!: FormGroup;
  config: boolean = true;

  fractionSumOrSub = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "mmc", desc: "Minímo multiplo comum", selected: false },
    { value: "crossSystem", desc: "Sistema cruzado", selected: false }
  ];

  arithSumOrSub = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "minMultipliCommon", desc: "Minímo multiplo comum", selected: false },
    { value: "sequencial", desc: "Sequencial", selected: false }
  ];

  arithSumOrSubFull = [
    { value: "random", desc: "Aliatório", selected: true },
    { value: "grouping", desc: "Agrupamento", selected: false },
    { value: "minMultipliCommon", desc: "Minímo multiplo comum", selected: false },
    { value: "sequencial", desc: "Sequencial", selected: false }
  ];

  constructor(
    private arithmeticService: ArithmeticService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.arithmeticForm = this.formBuilder.group({
      expression: ['', Validators.required],
      methodFractionSum: ['random', Validators.required],
      methodFractionSub: ['random', Validators.required],
      methodArithmeticSum: ['random', Validators.required],
      methodArithmeticSub: ['random', Validators.required],
      methodArithmeticSumOrSub: ['random', Validators.required],
    });
  }

  solve() {
    if (this.arithmeticForm.valid) {
      this.arithmeticService
        .solve(this.arithmeticForm.value)
        .subscribe((response) => this.mathResult = response);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Validação',
        text: 'Por verifica se os campos foram bem preenchidos!',
        footer: '<a class="b-n" href="/">Voltar a página principal?</a>'
      });
    }
  }

  script(id:any) {
    const exampleSection = document.querySelector(id);
    if (exampleSection) {
      const distance = exampleSection.offsetTop;
      window.scroll({
        top: distance,
        behavior: "smooth"
      });
    }
  }

}




