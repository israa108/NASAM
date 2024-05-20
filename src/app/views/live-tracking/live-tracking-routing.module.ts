import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LiveTrackingComponent } from "./live-tracking/live-tracking.component";

const routes: Routes = [
  {
    path: "livetracking",
    component: LiveTrackingComponent,
    // data: { title: "livetracking", breadcrumb: "Live Tracking" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrackingRoutingModule {}
