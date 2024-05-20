import { Component, OnInit, ViewChild } from "@angular/core";
import { ReportDescription, Reports } from "../models/reports";
import { Subscription } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ActivatedRoute, Router } from "@angular/router";
import { ReportsService } from "../services/reports.service";

interface Person {
  name: string;
  description: string;
  reporttype: string;
}
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  listOfData: Person[] = [
    {
      name: "Vehicles Tracking Report",
      description:
        "This report will provide you with the vehicles current location, distances traveled, and violated Geofences.",
      reporttype: "Vehicles",
    },
  ];
  title: string = "Standard Reports";
  isCollapsed = true;
  value: string;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  reports: Reports;
  selectedItemTitle: string = "";
  selectedItemDataSource: ReportDescription[] = [];
  private subscription: Subscription = new Subscription();
  //#region DataTable
  displayedColumns = ["name", "description", "reportType"];
  dataSource: MatTableDataSource<ReportDescription>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //#endregion DataTable
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private _http: ReportsService
  ) {
    // this.subscription.add(
    //   this.route.data.subscribe((data) => {
    //     this.reports = data.routeResolver;
    //     this.dataSource = new MatTableDataSource(this.reports.standerdData);
    //     this.selectedItemDataSource = this.reports.standerdData;
    //     this.selectedItemTitle = "Standard Reports";
    //   })
    // );
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {}

  // applyFilter(event: Event, value: string) {
  //   if (value) {
  //     this.title = `Search Results for "${value}"`;
  //     this.dataSource = new MatTableDataSource(this.reports.standerdData);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   } else {
  //     this.title = this.selectedItemTitle;
  //     this.dataSource = new MatTableDataSource(this.selectedItemDataSource);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(" this.dataSource :>> ", this.dataSource.filteredData.length);
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // clearFilter(): void {
  //   const filterValue = "";
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.title = this.selectedItemTitle;
  //   this.dataSource = new MatTableDataSource(this.selectedItemDataSource);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // favoriteList(row: RedportDescription) {
  //   row.favorite = !row.favorite;
  //   if (row.favorite) {
  //     this.reports.favoriteData.push(row);
  //   } else {
  //     this.reports.favoriteData.splice(
  //       this.reports.favoriteData.indexOf(row),
  //       1
  //     );
  //     this.dataSource._updateChangeSubscription();
  //   }

  // if (this.title === "Standard Reports") {
  //   switch (row.reportType) {
  //     case "Vehicles":
  //       this.reports.vehicleData = this.reports.vehicleData.map((element) => {
  //         element.id === row.id
  //           ? (element.favorite = !element.favorite)
  //           : null;
  //         return element;
  //       });
  //       break;
  //     case "Maintenance":
  //       this.reports.maintenanceData = this.reports.maintenanceData.map(
  //         (element) => {
  //           element.id === row.id
  //             ? (element.favorite = !element.favorite)
  //             : null;
  //           return element;
  //         }
  //       );
  //       break;
  //   }
  // } else {
  //   this.reports.standerdData = this.reports.standerdData.map((element) => {
  //     element.id === row.id ? (element.favorite = !element.favorite) : null;
  //     return element;
  //   });
  // }
  // api favoirit
  //   this.subscription.add(
  //     this._http
  //       .SetFav({
  //         reportId: row.id,
  //       })
  //       .subscribe((res) => {})
  //   );
  // }

  changeDataSource(title: string) {
    this.selectedItemTitle = title;
    this.title = title;
    switch (title) {
      case "Standard Reports":
        this.dataSource = new MatTableDataSource(this.reports.standerdData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedItemDataSource = this.reports.standerdData;
        break;
      case "Favorites":
        this.dataSource = new MatTableDataSource(this.reports.favoriteData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedItemDataSource = this.reports.favoriteData;
        break;
      case "Vehicles":
        this.dataSource = new MatTableDataSource(this.reports.vehicleData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedItemDataSource = this.reports.vehicleData;
        break;
      case "Mileage":
        this.dataSource = new MatTableDataSource(this.reports.mileageData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedItemDataSource = this.reports.mileageData;
        break;
      case "Fuel consumption":
        this.dataSource = new MatTableDataSource(this.reports.fuelData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selectedItemDataSource = this.reports.fuelData;
        break;
      default:
        this.dataSource._updateChangeSubscription();
        break;
    }
  }

  routeingReport(event, row: ReportDescription) {
    if ((<Element>event.target).getAttribute("fill") === null) {
      row.reportType === "Vehicles"
        ? this.router.navigateByUrl("/reports/vehicles")
        : this.router.navigateByUrl("/reports/maintenance");
    }
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
