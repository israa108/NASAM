import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { DriversComponent } from "./drivers/drivers.component";
import { DriverJournalComponent } from "./driver-journal/driver-journal.component";
import { EcoDrivingComponent } from "./eco-driving/eco-driving.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "vehicles",
        component: VehiclesComponent,
        data: { title: "Vehicles", breadcrumb: "Vehicles" },
      },
      {
        path: "drivers",
        component: DriversComponent,
        data: { title: "Drivers", breadcrumb: "Drivers" },
      },
      {
        path: "driver-journal",
        component: DriverJournalComponent,
        data: { title: "Driver journal", breadcrumb: "Driver journal" },
      },
      {
        path: "eco-driving",
        component: EcoDrivingComponent,
        data: { title: "Eco driving", breadcrumb: "Eco driving" },
      },
      {
        path: "maintenance",
        component: MaintenanceComponent,
        data: { title: "Maintenance", breadcrumb: "Maintenance" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetManagementRoutingModule {}
