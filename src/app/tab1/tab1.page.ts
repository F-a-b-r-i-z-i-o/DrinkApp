import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  //list name of cocktails
  cocktailName = [];
  //guard
  control = false;

  constructor(private route: Router) {}
  //keep the event input by the bar
  ionChange(event) {
    if (this.cocktailName.length < 1) {
      this.control = true;
      console.log(event.detail.value);
      let name = event.detail.value;
      this.cocktailName.push(name);
      console.log(this.cocktailName);
      console.log(this.cocktailName.length);
      //pass the data
      this.route.navigate(['tabs/tab2'], { state: { cocktailName: name } });
    } else {
      console.log('ok');
    }
  }
  ngOnInit() {
    console.log('PPASSSS');
  }
}
