import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() countries: Array<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
