import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneralManagementComponent } from "./general-management/general-management.component";

const routes: Routes = [
  {
    path: "generalmanagement",
    component: GeneralManagementComponent,
    data: { title: "generalmanagement", breadcrumb: "General management" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralManagementRoutingModule {}
