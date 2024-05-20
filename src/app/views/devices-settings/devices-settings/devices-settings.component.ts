import { Component, OnInit } from "@angular/core";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { Observable, Observer } from "rxjs";

interface Person {
  key: string;
  billing: string;
  amount: string;
  users: string;
  status: string;
  subscription: string;
}
@Component({
  selector: "app-devices-settings",
  templateUrl: "./devices-settings.component.html",
  styleUrls: ["./devices-settings.component.scss"],
})
export class DevicesSettingsComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  msg: any;
  value?: string;
  passwordVisible = false;
  password?: string;
  checked = true;

  listOfData: Person[] = [
    {
      key: "1",
      billing: "May 2022",
      amount: "$75.00",
      users: "5 users",
      status: "Paid due",
      subscription: "Professional",
    },
    {
      key: "2",
      billing: "Apr 2022",
      amount: "$75.00",
      users: "5 users",
      status: "Paid",
      subscription: "Professional",
    },
    {
      key: "3",
      billing: "Mar 2022",
      amount: "$75.00",
      users: "5 users",
      status: "Paid",
      subscription: "Professional",
    },
    {
      key: "4",
      billing: "Feb 2022",
      amount: "$75.00",
      users: "5 users",
      status: "Paid",
      subscription: "Professional",
    },
    {
      key: "5",
      billing: "Jan 2022",
      amount: "$75.00",
      users: "5 users",
      status: "Paid",
      subscription: "Professional",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.msg.error("You can only upload JPG file!");
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("Image must smaller than 2MB!");
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case "uploading":
        this.loading = true;
        break;
      case "done":
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case "error":
        this.msg.error("Network error");
        this.loading = false;
        break;
    }
  }
  getBase64(arg0: File, arg1: (img: string) => void) {
    throw new Error("Method not implemented.");
  }
}
