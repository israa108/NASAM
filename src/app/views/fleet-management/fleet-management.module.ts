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
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSegmentedModule } from "ng-zorro-antd/segmented";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";

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
    NzButtonModule,
    NzIconModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    NzTableModule,
    NzInputModule,
    NzSegmentedModule,
    NzTabsModule,
    NzDrawerModule,
    NzSelectModule,
    NzDatePickerModule,
    // RouterModule.forChild(FleetManagementRoutingModule)
  ],
})
export class FleetManagementModule {}
