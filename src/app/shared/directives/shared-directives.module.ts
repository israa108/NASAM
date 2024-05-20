import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppDropdownDirective } from "./dropdown.directive";
import { DropdownAnchorDirective } from "./dropdown-anchor.directive";
import { DropdownLinkDirective } from "./dropdown-link.directive";

const directives = [
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: directives,
  exports: directives,
})
export class SharedDirectivesModule {}
