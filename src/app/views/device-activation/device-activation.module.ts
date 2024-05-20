import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceActivationRoutingModule } from './device-activation-routing.module';
import { DeviceActivationComponent } from './device-activation/device-activation.component';


@NgModule({
  declarations: [
    DeviceActivationComponent
  ],
  imports: [
    CommonModule,
    DeviceActivationRoutingModule
  ]
})
export class DeviceActivationModule { }
