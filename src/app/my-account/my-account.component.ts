import { Component,ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { Route } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  // isMenuVisible: boolean | undefined;

  // document: any=addEventListener('DOMContentLoaded', function () {
  //   var profileImg = document.getElementById('profile-img');
  //   var menu = document.querySelector('.menu');
  
  //   if (profileImg && menu) {
  //     profileImg.addEventListener('click', function () {
  //       menu!.classList.toggle('hidden');
  //     });
  //   }
  // });
  
  
  // function handleClick() {
  // }

  //   document.addEventListener('DOMContentLoaded', function () {
  //     const tap = document.querySelector('.profile') as HTMLElement;
  //     const toggleMenu = document.querySelector('.menu') as HTMLElement;
    
  //     if (tap && toggleMenu) {
  //       tap.addEventListener('click', handleClick);
  //     }
  //   });

//   var toggle = document.getElementById("toggle");
// var container = document.getElementById("container");

// toggle.onclick = function(){
// 	container.classList.toggle('active');
// }

constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const toggle = this.el.nativeElement.querySelector('#toggle');
    const container = this.el.nativeElement.querySelector('#container');

    if (toggle && container) {
      toggle.addEventListener('click', () => {
        this.renderer.addClass(container, 'active');
      });
    }
  }

}

