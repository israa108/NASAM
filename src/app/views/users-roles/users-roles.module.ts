import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRolesRoutingModule } from "./users-roles-routing.module";
import { UsersRolesComponent } from "./users-roles/users-roles.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";

@NgModule({
  declarations: [UsersRolesComponent],
  imports: [
    CommonModule,
    UsersRolesRoutingModule,
    NzTableModule,
    NzBadgeModule,
    NzCheckboxModule,
  ],
})
export class UsersRolesModule {}
