import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  ngOnInit(): void {

  }

  constructor(private router: Router) {
    this.itemCleck(".about-item",".about-desc i","bx bx-plus","bx bx-minus");
    this.itemCleck(".subitems","i","bx bxs-down-arrow-circle text-dark","bx bxs-up-arrow-circle text-dark");
  }

  private itemCleck(cls: string, ico: string, iconOld: string, icoNew: string){
    const items = document.querySelectorAll(cls);
    items.forEach((item) => {
        item.addEventListener("click", () => {
          item.classList.toggle("open");
          const icon = item.querySelector(ico);
          icon!.className = icon!.className === iconOld ? icoNew : iconOld;
        });
      });
  }

  from(view: string) : void{
    this.router.navigate([view]);
  }

}

function containsClass(nav: HTMLElement, cls1: string, cls2: string): boolean {
  return nav.classList.contains(cls1) && nav.classList.contains(cls2);
}

function removeClass(nav: HTMLElement, cls1: string, cls2: string): void {
  nav.classList.remove(cls1);
  nav.classList.remove(cls2);
}

function addClass(nav: HTMLElement, cls1: string, cls2: string): void {
  nav.classList.add(cls1);
  nav.classList.add(cls2);
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    if (window.scrollY > 0) {
      if (containsClass(nav, "navbar-dark", "bg-primary")) {
        removeClass(nav, "navbar-dark", "bg-primary");
        addClass(nav, "navbar-light", "bg-light");
      }
    } else {
      if (containsClass(nav, "navbar-light", "bg-light")) {
        removeClass(nav, "navbar-light", "bg-light");
        addClass(nav, "navbar-dark", "bg-primary");
      }
    }
  }
});
