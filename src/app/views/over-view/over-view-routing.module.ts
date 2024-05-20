import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverViewComponent } from "./over-view/over-view.component";

const routes: Routes = [
  {
    path: "overview",
    component: OverViewComponent,
    // data: { title: "overview", breadcrumb: "Overview" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverViewRoutingModule {}
