import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  ingridients: any;
  coktailList: any;
  control = null;
  scan = [];

  //name pass by tab1page
  cocktailName = this.router.getCurrentNavigation().extras.state.cocktailName;

  constructor(private http: HttpClient, private router: Router) {}

  getData() {
    console.log(this.cocktailName);
    this.control = true;
    if ((this.control = true)) {
      this.http
        .get(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
            this.cocktailName
        )
        .subscribe((data: any) => {
          console.log(data);
          this.coktailList = data.drinks;
          console.log(this.coktailList);
        });
    } else {
      this.coktailList = [];
      this.control = false;
      console.log('Vuoto');
    }
  }
  /*
  ionChange(event) {
    console.log(event.detail.value);
    let name = event.detail.value;
    this.cocktailName.push(name);
    console.log('okkkkkkk');
    console.log(this.cocktailName);
  }
  */

  ngOnInit() {
    this.getData();
  }
}
