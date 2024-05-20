import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { rootRouterConfig } from "./app.routing";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { GoogleMapsModule } from "@angular/google-maps";

// icons
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
} from "@ant-design/icons-angular/icons";
import { IconDefinition } from "@ant-design/icons-angular";
import {
  CaretLeftOutline,
  SettingOutline,
  StepBackwardOutline,
} from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [
  AccountBookFill,
  AlertOutline,
  AlertFill,
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    GoogleMapsModule,
    NzIconModule.forRoot(icons),
    TablerIconsModule.pick(TablerIcons),
    RouterModule.forRoot(rootRouterConfig),
  ],
  declarations: [AppComponent],
  providers: [],
  exports: [TablerIconsModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
