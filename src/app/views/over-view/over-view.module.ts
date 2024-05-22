import { MatDividerModule } from "@angular/material/divider";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OverViewRoutingModule } from "./over-view-routing.module";
import { OverViewComponent } from "./over-view/over-view.component";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { CalendarModule } from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { ChartModule } from "primeng/chart";
import { MapsModule } from "@syncfusion/ej2-angular-maps";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { MatButtonModule } from "@angular/material/button";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
  declarations: [OverViewComponent],
  imports: [
    CommonModule,
    OverViewRoutingModule,
    SharedComponentsModule,
    MatDividerModule,
    MatButtonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    NzDatePickerModule,
    ChartModule,
    MapsModule,
    NzDropDownModule,
    NzButtonModule,
  ],
})
export class OverViewModule {}
