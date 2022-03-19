import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  cocktailName = [];
  coktailList: any;
  control = null;

  constructor(private http: HttpClient) {}

  getData() {
    this.control = true;
    if ((this.control = true)) {
      this.ionChange(event);
      this.http
        .get(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
            this.cocktailName
        )
        .subscribe((data: any) => {
          console.log(data);
          this.coktailList = data.drinks;
          console.log(this.coktailList);
          this.cocktailName.pop();
          console.log(this.cocktailName);
        });
    } else {
      this.coktailList = [];
      this.control = false;
      console.log('Vuoto');
    }
  }

  ionChange(event) {
    console.log(event.detail.value);
    let name = event.detail.value;
    this.cocktailName.push(name);
    console.log('okkkkkkk');
    console.log(this.cocktailName);
  }

  ngOnInit() {
    this.getData();
  }
}
