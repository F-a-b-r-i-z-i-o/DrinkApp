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
  control = false;

  //name pass by tab1page
  cocktailName = this.router.getCurrentNavigation().extras.state.cocktailName;

  constructor(private http: HttpClient, private router: Router) {}

  //function to get data by the API
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
          //list of cocktail
          this.coktailList = data.drinks;
          console.log(this.coktailList);
        });
    } else {
      //empty list
      this.coktailList = [];
      this.control = false;
      console.log('Vuoto');
    }
  }

  ngOnInit() {
    this.getData();
  }
}

