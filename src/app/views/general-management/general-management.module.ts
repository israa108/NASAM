import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GeneralManagementRoutingModule } from "./general-management-routing.module";
import { GeneralManagementComponent } from "./general-management/general-management.component";

@NgModule({
  declarations: [GeneralManagementComponent],
  imports: [CommonModule, GeneralManagementRoutingModule],
})
export class GeneralManagementModule {}
