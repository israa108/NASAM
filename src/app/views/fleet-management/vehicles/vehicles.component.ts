import { Component, OnInit } from "@angular/core";
import { getISOWeek } from "date-fns";

import { en_US, NzI18nService, zh_CN } from "ng-zorro-antd/i18n";
interface Person {
  key: string;
  vehicle: string;
  realtime: string;
  start: string;
  end: string;
  distance: string;
  Violated: number;
  consumed: string;
  efficiency: string;
}
@Component({
  selector: "app-vehicles",
  templateUrl: "./vehicles.component.html",
  styleUrls: ["./vehicles.component.scss"],
})
export class VehiclesComponent implements OnInit {
  visibleSidebar2;
  checked: boolean = false;
  date = null;
  isEnglish = false;
  visible = false;

  onChange(result: Date): void {
    console.log("onChange: ", result);
  }

  getWeek(result: Date): void {
    console.log("week: ", getISOWeek(result));
  }

  // changeLanguage(): void {
  //   this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
  //   this.isEnglish = !this.isEnglish;
  // }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  constructor() {}

  ngOnInit(): void {}

  listOfData: Person[] = [
    {
      key: "1",
      vehicle: "Vehicle 01 ID",
      realtime: "6113 Fernanda Flats, New Concetta, NC 97888",
      start: "10.10.2024",
      end: "10.10.2024",
      distance: "200 Km",
      Violated: 40,
      consumed: "200 L",
      efficiency: "500 Km/L",
    },
  ];
}
