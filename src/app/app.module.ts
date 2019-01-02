import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

//COMPONENTS
import { AppComponent } from './app.component';

//SERVICES
import { UbigeoService } from './services/ubigeo.service';

//PIPES
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { ProvinceNamePipe } from './pipes/province-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentNamePipe,
    ProvinceNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UbigeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
