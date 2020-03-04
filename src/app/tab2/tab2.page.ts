import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastController } from '@ionic/angular';
import { Order } from '../Model/Order';

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

  constructor(private userService: UserService,
              ) {
    console.log('tab2' + JSON.stringify(this.userService.user));
    this.userService.getCustomerOrderList(this.userService.user).subscribe(order => {
      console.log(order.result);
      this.order_list = order.result;
    })
  }

}
