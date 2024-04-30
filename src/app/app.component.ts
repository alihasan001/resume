import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  darkMode: any = false;
  constructor(public router: Location) {}

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('dark-mode') ?? false;
    console.log(this.router.path())
  }

  changeMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem('dark-mode', this.darkMode);
  }
}
