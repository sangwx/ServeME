import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tabs-vendor',
  templateUrl: './tabs-vendor.page.html',
  styleUrls: ['./tabs-vendor.page.scss'],
})
export class TabsVendorPage implements OnInit {
    public userName: string;

  constructor(public activeRoute: ActivatedRoute) {
      this.activeRoute.queryParams.subscribe((params: Params) => {
          this.userName = params['name'];
          console.log('name:' + this.userName);
      });
  }

  ngOnInit() {
  }

}
