import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceActivationComponent } from "./device-activation/device-activation.component";

const routes: Routes = [
  {
    path: "activation",
    component: DeviceActivationComponent,
    data: { title: "activation", breadcrumb: "Activation" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceActivationRoutingModule {}
