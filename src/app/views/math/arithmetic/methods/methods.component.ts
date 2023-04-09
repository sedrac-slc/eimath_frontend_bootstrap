import { Component } from '@angular/core';

@Component({
  selector: 'app-methods-arithmetic',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent {

  fractionSum = [
    { group: "methodFractionSum", value: "random", desc: "Aliatório", check: true, id: "fracSumRandom" },
    { group: "methodFractionSum", value: "mmc", desc: "Minímo multiplo comum", check: false, id: "fracSumMmc" },
    { group: "methodFractionSum", value: "crossSystem", desc: "Sistema cruzado", check: false, id: "fracSumCross" }
  ];

  fractionSub = [
    { group: "methodFractionSub", value: "random", desc: "Aliatório", check: true, id: "fracSubRandom" },
    { group: "methodFractionSub", value: "mmc", desc: "Minímo multiplo comum", check: false, id: "fracSubMmc" },
    { group: "methodFractionSub", value: "crossSystem", desc: "Sistema cruzado", check: false, id: "fracSubCross" }
  ];

  arithSum = [
    { group: "methodArithmeticSum", value: "random", desc: "Aliatório", check: true, id: "arithSumRandom" },
    { group: "methodArithmeticSum", value: "mmc", desc: "Minímo multiplo comum", check: false, id: "arithSumMmc" },
    { group: "methodArithmeticSum", value: "crossSystem", desc: "Sistema cruzado", check: false, id: "arithSumCross" }
  ];

  arithSub = [
    { group: "methodArithmeticSub", value: "random", desc: "Aliatório", check: true, id: "arithSubRandom" },
    { group: "methodArithmeticSub", value: "mmc", desc: "Minímo multiplo comum", check: false, id: "arithSubMmc" },
    { group: "methodArithmeticSub", value: "crossSystem", desc: "Sistema cruzado", check: false, id: "arithSubCross" }
  ];

  fractionSumEx = `
  <section class="fraction-arithmetic">
  <div class="fraction proper">
    <div class="numerator">1</div>
    <div class="separator"></div>
    <div class="denominator">5</div>
  </div>
  <div class="fraction proper">
    <div class="signal plus">+</div>
    <div class="numerator">2</div>
    <div class="separator"></div>
    <div class="denominator">3</div>
  </div>
</section>
`;


fractionSubEx = `
<section class="fraction-arithmetic">
<div class="fraction proper">
  <div class="numerator">9</div>
  <div class="separator"></div>
  <div class="denominator">5</div>
</div>
<div class="fraction proper">
  <div class="signal minus">-</div>
  <div class="numerator">4</div>
  <div class="separator"></div>
  <div class="denominator">3</div>
</div>
</section>
`;


arithmeticSumEx = `
<section class="fraction-arithmetic">
<div class="fraction proper">
  <div class="numerator">1</div>
  <div class="separator"></div>
  <div class="denominator">5</div>
</div>
<div class="fraction proper">
  <div class="signal plus">+</div>
  <div class="numerator">2</div>
  <div class="separator"></div>
  <div class="denominator">3</div>
</div>
<div class="fraction proper">
  <div class="signal plus">+</div>
  <div class="numerator">1</div>
  <div class="separator"></div>
  <div class="denominator">5</div>
</div>
<div class="fraction proper">
  <div class="signal plus">+</div>
  <div class="numerator">4</div>
  <div class="separator"></div>
  <div class="denominator">8</div>
</div>
</section>
`

}
