import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersRolesComponent } from "./users-roles/users-roles.component";

const routes: Routes = [
  {
    path: "usersroles",
    component: UsersRolesComponent,
    data: { title: "usersroles", breadcrumb: "User Roles" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRolesRoutingModule {}
