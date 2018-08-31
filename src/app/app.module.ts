import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ConfirmEqualValidatorDirective } from './shard/confirm-equal-validator.directive';
// import { CountryService } from './country.service';
// import { CountryComponent } from './country/country.component';
// import { ListViewComponent } from './list-view/list-view.component';
// import { GridViewComponent } from './grid-view/grid-view.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ConfirmEqualValidatorDirective,
    // CountryComponent,
    // ListViewComponent,
    // GridViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    // CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
