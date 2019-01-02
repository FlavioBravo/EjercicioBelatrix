import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/Operators";

import { DeparmentModel, ProvinceModel, DistrictModel } from '../models/modelsIndex';

@Injectable({
  providedIn: "root"
})
export class UbigeoService {
  private fileRoot: string = "./assets/textFile.txt";
  private departmentList: DeparmentModel[] = [];
  private provinceList: ProvinceModel[] = [];
  private districtList: DistrictModel[] = [];

  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get(this.fileRoot, { responseType: "text" }).pipe(
      map(data => {
        const tmpList = data.replace(/['"]+/g, '').split("\n");
        let divisionIndex = 0;
        let finalIndex = 0;
        for (let index = 0; index < tmpList.length; index++) {
          let element = tmpList[index].split("/");
          if (element[1].trim() === "" && element[2].trim() === "") {
            divisionIndex = element[0].trim().indexOf(" ");
            finalIndex = element[0].trim().length;
            this.departmentList.push({
              id: element[0].trim().substring(0, divisionIndex),
              name: element[0].trim().substring(++divisionIndex, finalIndex)
            });
          }
        }
        return this.departmentList;
      })
    );
  }

  getProvinces() {
    return this.http.get(this.fileRoot, { responseType: "text" }).pipe(
      map(data => {
        const tmpList = data.replace(/['"]+/g, '').split("\n");
        let divisionIndex = 0;
        let finalIndex = 0;
        for (let index = 0; index < tmpList.length; index++) {
          let element = tmpList[index].split("/");
          if (
            element[0].trim() != "" &&
            element[1].trim() != "" &&
            element[2].trim() === ""
          ) {
            divisionIndex = element[1].trim().indexOf(" ");
            finalIndex = element[1].trim().length;
            this.provinceList.push({
              id: element[1].trim().substring(0, divisionIndex),
              name: element[1].trim().substring(++divisionIndex, finalIndex),
              parentId: element[0].trim().split(" ")[0]
            });
          }
        }
        return this.provinceList;
      })
    );
  }

  getDistricts() {
    return this.http.get(this.fileRoot, { responseType: "text" }).pipe(
      map(data => {
        const tmpList = data.replace(/['"]+/g, '').split("\n");
        let divisionIndex = 0;
        let finalIndex = 0;
        for (let index = 0; index < tmpList.length; index++) {
          let element = tmpList[index].split("/");
          if (
            element[0].trim() != "" &&
            element[1].trim() != "" &&
            element[2].trim() != ""
          ) {
            divisionIndex = element[2].trim().indexOf(" ");
            finalIndex = element[2].trim().length;
            this.districtList.push({
              id: element[2].trim().substring(0, divisionIndex),
              name: element[2].trim().substring(++divisionIndex, finalIndex),
              parentId: element[1].trim().split(" ")[0]
            });
          }
        }
        return this.districtList;
      })
    );
  }
}
