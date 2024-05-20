import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
})
export class NotificationsComponent implements OnInit {
  @Input() notificPanel;

  // Dummy notifications
  notifications = [
    {
      message: "Speed Alert",
      icon: "notifications",
      time: " •4 min ago",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
    {
      message: "A new device was added •",
      icon: "arrow_forward",
      time: "07.12.2023 13:33",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
    {
      message: "A new device was added •",
      icon: "arrow_forward",
      time: "07.12.2023 13:33",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
    {
      message: "Speed Alert",
      icon: "notifications",
      time: " •4 min ago",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
    {
      message: "A new device was added •",
      icon: "arrow_forward",
      time: "07.12.2023 13:33",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
    {
      message: "A new device was added •",
      icon: "arrow_forward",
      time: "07.12.2023 13:33",
      route: "",
      staus: "Object 'Vehicle 01 Field.",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((routeChange) => {
      if (routeChange instanceof NavigationEnd) {
        this.notificPanel.close();
      }
    });
  }
  deleteAll(e) {
    e.preventDefault();
    this.notifications = [];
  }
}
