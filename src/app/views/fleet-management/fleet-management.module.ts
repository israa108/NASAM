import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { FleetManagementRoutingModule } from "./fleet-management-routing.module";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { DriversComponent } from "./drivers/drivers.component";
import { DriverJournalComponent } from "./driver-journal/driver-journal.component";
import { EcoDrivingComponent } from "./eco-driving/eco-driving.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

@NgModule({
  declarations: [
    VehiclesComponent,
    DriversComponent,
    DriverJournalComponent,
    EcoDrivingComponent,
    MaintenanceComponent,
  ],
  imports: [
    CommonModule,
    FleetManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,

    // RouterModule.forChild(FleetManagementRoutingModule)
  ],
})
export class FleetManagementModule {}
