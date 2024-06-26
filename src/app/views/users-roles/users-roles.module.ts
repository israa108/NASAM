import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRolesRoutingModule } from "./users-roles-routing.module";
import { UsersRolesComponent } from "./users-roles/users-roles.component";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from "app/shared/shared-material.module";
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
  declarations: [UsersRolesComponent],
  imports: [
    CommonModule,
    UsersRolesRoutingModule,
    NzTableModule,
    NzBadgeModule,
    NzCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NzButtonModule,
    NzIconModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    NzInputModule,
    NzSegmentedModule,
    NzTabsModule,
    NzDrawerModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
})
export class UsersRolesModule {}
