import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LiveTrackingRoutingModule } from "./live-tracking-routing.module";
import { LiveTrackingComponent } from "./live-tracking/live-tracking.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { SharedModule } from "app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatDividerModule } from "@angular/material/divider";
import { InputTextModule } from "primeng/inputtext";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { AccordionModule } from "primeng/accordion";
import { MatButtonModule } from "@angular/material/button";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputModule } from "ng-zorro-antd/input";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TabViewModule } from "primeng/tabview";
import { TimelineModule } from "primeng/timeline";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { CheckboxModule } from "primeng/checkbox";
import { MatTableModule } from "@angular/material/table";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ButtonModule } from "primeng/button";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { TagModule } from "primeng/tag";
import { ImageModule } from "primeng/image";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { CalendarModule } from "primeng/calendar";
import { NzBadgeModule } from "ng-zorro-antd/badge";

@NgModule({
  declarations: [LiveTrackingComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    AvatarModule,
    LiveTrackingRoutingModule,
    SharedModule,
    MatDividerModule,
    InputTextModule,
    FormsModule,
    MatExpansionModule,
    ImageModule,
    MatFormFieldModule,
    MatIconModule,
    PanelModule,
    TableModule,
    OverlayPanelModule,
    AccordionModule,
    TagModule,
    MatButtonModule,
    NzDropDownModule,
    NzCollapseModule,
    NzSelectModule,
    NzInputModule,
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextareaModule,
    TabViewModule,
    TimelineModule,
    NzCheckboxModule,
    MatTabsModule,
    CheckboxModule,
    MatTableModule,
    ButtonModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    NzIconModule,
    NzTableModule,
    NzTimelineModule,
    CalendarModule,
    NzBadgeModule,
  ],
})
export class LiveTrackingModule {}
