import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ObjectService {
  getData() {
    return [
      {
        id: 1435,
        name: "Car name 01",
        country: {
          name: "10 km/h",
          code: "hr",
        },
        company: "20/11/2023",
        date: "2015-08-18",
        status: "",
        verified: true,
        representative: {
          name: "Mohsen’s Objects",
        },
        balance: 9752,
      },

      {
        id: 1499,
        name: "Car name 01",
        country: {
          name: "10 km/h",
          code: "ar",
        },
        company: "20/11/2023",
        date: "2019-04-23",
        status: "",
        verified: true,
        representative: {
          name: "Ansary’s Objects",
        },
        balance: 88090,
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>("https://www.primefaces.org/data/customers", { params: params })
      .toPromise();
  }
}
