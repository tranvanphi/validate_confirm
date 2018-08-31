import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private currentView:string = 'list';
  private page:number = 0;
  private totalPages:Array<number>;
  private countries:Array<any>;
  private typeCountries:any = 'all';

  constructor(private countryService:CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  setPage(i, event:any)
  {
    event.preventDefault();
    this.page = i;
    this.getCountries();
  }


  getCountries()
  {
    this.countryService.getCountries(this.page,this.typeCountries).subscribe(
      data =>{
        // console.log(data);
        this.countries = data['result'];
        this.totalPages = new Array(data['totalPage']);
      },
      (error)=>{
        console.log(error.error.message);
      }
    );
  }

 
  setCurrentView(view) {
    this.currentView = view;
  }

  getCountriesType(type)
  {
    this.typeCountries = type;
    this.page = 0;
    this.getCountries();
  }
}
