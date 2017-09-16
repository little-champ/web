import { Component, HostListener } from '@angular/core';
import * as AppConstants from './app.constants';

@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavMode = AppConstants.SideNavMode.side;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width) {
    this.sideNavMode = width > AppConstants.mobileDeviceWidth ? AppConstants.SideNavMode.side : AppConstants.SideNavMode.over;
  }
}
