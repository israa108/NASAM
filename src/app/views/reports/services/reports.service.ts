import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from "rxjs";
// import { environment } from '@env';
import { Router } from "@angular/router";
// import {
//   MaintenanceReportFilter,
//   VehiclesReportFilter,
// } from "../models/reports";
// import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ReportsService {
  // private url = environment;
  // private urlReport = environment;
  constructor(
    private http: HttpClient,
    // protected cookie: CookieService,
    public router: Router
  ) {}

  // TrackingReport(vehiclesReportFilter: VehiclesReportFilter): Observable<any> {
  //   return this.http.post(
  //     `${this.urlReport}/reports/trackingReport`,
  //     vehiclesReportFilter
  //   );
  // }

  // Reports(): Observable<any> {
  //   return this.http.get(`${this.urlReport}/reports/reports`);
  // }

  // TrackingReportExport(filterFormExport: any): Observable<any> {
  //   return this.http.post(
  //     `${this.urlReport}/reports/trackingReportExport`,
  //     filterFormExport
  //   );
  // }

  // MaintenanceReportExport(filterFormExport: any): Observable<any> {
  //   return this.http.post(
  //     `${this.urlReport}/reports/maintenanceReportExport`,
  //     filterFormExport
  //   );
  // }

  // MaintenanceReport(
  //   filterFormExport: MaintenanceReportFilter
  // ): Observable<any> {
  //   return this.http.post(
  //     `${this.urlReport}/reports/maintenanceReport`,
  //     filterFormExport
  //   );
  // }
  // SetFav(obj: { reportId: number }): Observable<any> {
  //   return this.http.post(`${this.urlReport}/reports/setFav`, obj);
  // }

  // GetVehiclesDropDown(
  //   regularMaintenanceId: number,
  //   page: number,
  //   total: number,
  //   searchText: string
  // ): Observable<any> {
  //   return this.http.get(
  //     `${this.urlReport}/maintenance/getVehiclessDropDownAssignRegular?regularMaintenance=${regularMaintenanceId}&page=${page}&total=${total}&search=${searchText}`
  //   );
  // }
  // GetVehiclesMenu(term, obj): Observable<any> {
  //   return this.http.post(
  //     `${this.url}/fms_vehicles/getVehiclesDropdown?searchString=${term}`,
  //     obj
  //   );
  // }
}
