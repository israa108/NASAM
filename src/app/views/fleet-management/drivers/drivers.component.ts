import { Component, OnInit } from "@angular/core";

export interface Person {
  key: string;
  driver: number;
  name: string;
  card: number;
  phone: number;
  Parent: string;
  address: string;
  license: number;
  notes: string;
}
@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.scss"],
})
export class DriversComponent implements OnInit {
  checked: boolean = false;
  visible = false;

  constructor() {}

  ngOnInit(): void {}

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  listOfData: Person[] = [
    {
      key: "1",
      driver: 215125415,
      name: "Mohamed Osama",
      card: 25125,
      phone: 2314112414,
      Parent: "demo",
      address: "address",
      license: 20 / 2 / 2024,
      notes: "notes",
    },
  ];
}
