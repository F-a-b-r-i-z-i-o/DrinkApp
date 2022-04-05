import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  cocktailName = [];
  control = false;

  constructor(private route: Router) {}

  ionChange(event) {
    if (this.cocktailName.length < 1) {
      this.control = true;
      console.log(event.detail.value);
      let name = event.detail.value;
      this.cocktailName.push(name);
      console.log(this.cocktailName);
      console.log(this.cocktailName.length);
      this.route.navigate(['tabs/tab2'], { state: { cocktailName: name } });
    } else {
      console.log('ok');
    }
  }
  ngOnInit() {
    //this.getNameCock();
    console.log('PPASSSS');
  }
}
