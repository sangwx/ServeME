import { Component, OnInit } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';
import { UserService } from '../service/user.service';
import { Order } from '../Model/Order';
import {User} from '../Model/user';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {

    // order: Order = {
    //     orderId: '',
    //     orderType: '',
    //     problemDescription: '',
    //     minPrice: 1,
    //     maxPrice: 1,
    // orderState: '',
    // orderCity: '',
    // orderDetailAddress: '',
    // orderZipCode: '',
    // orderPhone: '',
    // orderStatus: 1,
    // serviceTime: '',
    // descriptionPicture: ''
    // };

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
