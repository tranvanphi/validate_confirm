import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class CountryService {
  private baseUrl:string = 'http://localhost/demoAPI/api/country';
  constructor(private http:HttpClient) { }

  getCountries(page:number,type:number)
  {
    var data = "page="+page+"&type="+type;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.baseUrl + '/listcountry', data, {headers: reqHeader});
  }
}
