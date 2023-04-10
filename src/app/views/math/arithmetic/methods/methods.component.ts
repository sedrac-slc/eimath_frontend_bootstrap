import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-methods-arithmetic',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent {
  @Input() config: boolean = true;
  @Input() arithmeticForm!: FormGroup;

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



  script(id:any) {
    const exampleSection = document.querySelector(id);
    if (exampleSection) {
      const distance = exampleSection.offsetTop;
      const arithExemple = document.querySelectorAll('.arith-exemple');
      arithExemple.forEach( exp =>{
        exp.classList.remove("foco");
        if( "#"+exp.id == id)
          exp.classList.add("foco");
      });
      window.scroll({
        top: distance,
        behavior: "smooth"
      });
    }
  }

}
