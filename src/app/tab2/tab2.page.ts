import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Order } from '../Model/order';
import {OrderService} from '../service/order.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private id: string;
  private type: string;
  private time: string;
  private order_list: Order[];

  constructor(private orderService: OrderService,
              private userService: UserService
              ) {
    console.log('tab2' + JSON.stringify(this.userService.user));
    this.orderService.getCustomerOrderList().subscribe(order => {
      console.log(order.result);
      this.order_list = order.result;
    })
  }

}
