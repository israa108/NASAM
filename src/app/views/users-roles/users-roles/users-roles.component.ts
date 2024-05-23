import { Component, OnInit } from "@angular/core";
import { Data } from "@angular/router";
import { getISOWeek } from "date-fns";

interface Person {
  key: string;
  firstname: string;
  lastname: string;
  username: string;
  startdate: string;
  expiredate: string;
  email: string;
  actions: string;
}
interface Date {
  key: string;
  firstname: string;
  lastname: string;
  username: string;
  startdate: string;
  expiredate: string;
  email: string;
  actions: string;
}
@Component({
  selector: "app-users-roles",
  templateUrl: "./users-roles.component.html",
  styleUrls: ["./users-roles.component.scss"],
})
export class UsersRolesComponent implements OnInit {
  visibleSidebar2;
  checked: boolean = false;
  date = null;
  isEnglish = false;
  visible = false;

  onChange(result: Date): void {
    console.log("onChange: ", result);
  }

  // getWeek(result: Date): void {
  //   console.log("week: ", getISOWeek(result));
  // }

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
      firstname: "Ahmed",
      lastname: "Hossam",
      username: "AhmedHossam1",
      startdate: "10.10.2024",
      expiredate: "10.10.2024",
      email: "AhmedHossam1@gmail.com",
      actions: "200 L",
    },
  ];
  // listOfData2: Data[] = [
  //   {
  //     key: "1",
  //     firstname: "Ahmed",
  //     lastname: "Hossam",
  //     username: "AhmedHossam1",
  //     startdate: "10.10.2024",
  //     expiredate: "10.10.2024",
  //     email: "AhmedHossam1@gmail.com",
  //     actions: "200 L",
  //   },
  // ];
}
