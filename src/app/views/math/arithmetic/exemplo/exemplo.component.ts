import { Component } from '@angular/core';

@Component({
  selector: 'app-arithmetic-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent {

  copyExpression(id: any) {
    const btnId = "#btn-" + id;
    const btn = document.querySelector(btnId);
    const icon = btn!.querySelector("i");
    try {
      const text = document.querySelector("#" + id)?.innerHTML.trim();
      const btnCopys = document.querySelectorAll(".btn-copy");
      if (text) {
        navigator.clipboard.writeText(text);

        btnCopys.forEach(item => {
          if("#"+item.id == btnId)
              this.changeButtonAndIcon(btn, icon,"btn-outline-primary","btn-outline-success","bx-copy","bx-check");
          else{
            const iconI = item!.querySelector("i");
            this.changeButtonAndIcon(item, iconI,"btn-outline-success","btn-outline-primary","bx-check","bx-copy");
          }
        });

      } else {
        this.changeButtonAndIcon(btn, icon,"btn-outline-success","btn-outline-primary","bx-check","bx-copy");
      }
    } catch (err) {
      this.changeButtonAndIcon(btn, icon,"btn-outline-primary","btn-outline-danger","bx-copy","bx-x");
    }
  }

  changeButtonAndIcon(btn: any, icon: any, btnOld: string, btnNew: string, iconOld: string, iconNew: string) {
    if (icon?.classList.contains(iconOld)) {
      icon.classList.remove(iconOld);
      icon.classList.add(iconNew);
      if (btn?.classList.contains(btnOld)) {
        btn.classList.remove(btnOld)
        btn.classList.add(btnNew);
      }
    }
  }

}
