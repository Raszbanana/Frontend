import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <div class="container">
      <p class="title">
        Welcome to my prototype website, if you click to the "Users" tab, you will be able to see a display of users!
      </p>
    </div>
  </div>
</section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
