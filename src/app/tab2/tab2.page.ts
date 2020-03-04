import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private userService: UserService,
              ) {
    console.log('tab2' + JSON.stringify(this.userService.user));
    this.userService.getCustomerOrderList(this.userService.user).subscribe(order => {
      console.log(order.result);
    })
  }

}
