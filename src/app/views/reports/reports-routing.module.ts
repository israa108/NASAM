import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportsComponent } from "./reports/reports.component";
import { VehiclesReportComponent } from "./psges-reports/vehicles-report/vehicles-report.component";
import { MileageReportComponent } from "./psges-reports/mileage-report/mileage-report.component";

const routes: Routes = [
  {
    path: "reports",
    component: ReportsComponent,
    data: { title: "reports", breadcrumb: "Reports" },
    children: [
      {
        path: "Vehicles",
        component: VehiclesReportComponent,
      },
      {
        path: "mileage",
        component: MileageReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
