import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private route: ActivatedRoute) {}
  isRouteActive(routePath: string) {
    if (this.route.snapshot.routeConfig) {
      return this.route.snapshot.routeConfig.path === routePath;
    }else{
      return null
    }
  }
}
