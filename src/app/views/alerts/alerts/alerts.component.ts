import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  ngOnInit(): void {}
  0;
  @ViewChild("menuTrigger") menuTrigger: MatMenuTrigger;

  // openDialog() {
  //   const dialogRef = this.dialog.open(AlertsComponent, {
  //     restoreFocus: false,
  //   });

  //   // Manually restore focus to the menu trigger since the element that
  //   // opens the dialog won't be in the DOM any more when the dialog closes.
  //   dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 21.492335,
    lng: 39.443053,
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
