export class DistrictModel {
  id: string;
  name: string;
  parentId: string;
  constructor(id: string, name: string, parentId: string) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
  }
}
