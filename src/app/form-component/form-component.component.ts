import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  ngOnInit(){}


  // employee = new Hero(18, 'Dr IQ', '','');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
