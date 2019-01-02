import { Component } from "@angular/core";
import { UbigeoService } from "./services/ubigeo.service";
import { DeparmentModel, ProvinceModel, DistrictModel } from './models/modelsIndex';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "EjercicioFrontEnd";
  DeparmentList: DeparmentModel[] = [];
  ProvinceList: ProvinceModel[] = [];
  DistrictList: DistrictModel[] = [];
  mensajeError: string;

  constructor(private _ubigeoService: UbigeoService) {
    this.getDepartments();
    this.getProvinces();
    this.getDistricts();
  }

  getDepartments() {
    this._ubigeoService.getDepartments().subscribe(
      departments => {
        this.DeparmentList = departments;
      },
      error => {
        console.log(error);
        this.mensajeError = error;
      }
    );
  }

  getProvinces() {
    this._ubigeoService.getProvinces().subscribe(
      provinces => {
        this.ProvinceList = provinces;
      },
      error => {
        console.log(error);
        this.mensajeError = error;
      }
    );
  }

  getDistricts() {
    this._ubigeoService.getDistricts().subscribe(
      districts => {
        this.DistrictList = districts;
      },
      error => {
        console.log(error);
        this.mensajeError = error;
      }
    );
  }
}
