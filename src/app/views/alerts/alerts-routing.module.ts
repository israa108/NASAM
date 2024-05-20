import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlertsComponent } from "./alerts/alerts.component";

const routes: Routes = [
  {
    path: "alerts",
    component: AlertsComponent,
    data: { title: "alerts", breadcrumb: "Alerts" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertsRoutingModule {}
