import { clientMenuItems } from './../menu';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class HorizontalMenuComponent implements OnInit {

  @Input('menuParentId') menuParentId: any;
  public menuItems: Array<any> = [];
  public settings: Settings;
  public currentUrl: string = '';

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

constructor(
  public appSettings: AppSettings,
  public menuService: MenuService,
  public router: Router,
  private cdr: ChangeDetectorRef
) {
  this.settings = this.appSettings.settings;
}

  ngOnInit() {



    this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    this.cdr.detectChanges();
  }
});

    this.currentUrl = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.cdr.detectChanges();
      }
    });

    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);

    const isClient = localStorage.getItem('isClient');

    if (isClient && JSON.parse(isClient) == true) {
      this.menuItems = this.menuService.getClientMenuItems();
    }
  }

isMenuItemActive(menu: any): boolean {

  const url = this.router.url;

  const result =
    url.startsWith(menu.routerLink) ||

    (menu.routerLink === '/app/prts-part' &&
      (url.startsWith('/app/prtsnavbar') ||
       url.startsWith('/app/prtsonepager'))) ||

    (menu.routerLink === '/app/subjective-audits' &&
      url.startsWith('/app/checklistdoard')) ||

    (menu.routerLink === '/app/objective-audits' &&
      (url.startsWith('/app/setup/subjective/check') ||
       url.startsWith('/app/setup/subjective/overview')));

  if (menu.title === 'OBJ Audits') {
    console.log('OBJ RESULT = ', result);
  }

  return result;
}

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        if (this.settings.fixedHeader) {
          const mainContent = document.getElementById('main-content');

          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        }
        else {
          const drawer = document.getElementsByClassName('mat-drawer-content')[0] as HTMLElement;

          if (drawer) {
            drawer.scrollTop = 0;
          }
        }
      }
    });
  }
}