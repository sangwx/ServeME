import { Component, OnInit } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';
import { UserService } from '../service/user.service';
import { Order } from '../Model/order';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from '../service/image.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {
    customActionSheetOptions: any = {
        header: 'Types:',
        subHeader: 'Please select one type:'
    };
    date =new Date();


    order: { orderId: string; orderType: string; problemDescription: string; minPrice: number; maxPrice: number; orderState: string; orderCity: string; orderDetailAddress: string; orderZipCode: string; orderPhone: string; orderStatus: number; serviceTime: string; descriptionPicture: string } = {
        orderId: '',
        orderType: '',
        problemDescription: '',
        minPrice: 0,
        maxPrice: 0,
        orderState: '',
        orderCity: '',
        orderDetailAddress: '',
        orderZipCode: '',
        orderPhone: '',
        orderStatus: 1,
        serviceTime: '',
        descriptionPicture: '',

    };

    types = [
        {type : 'Appliances'},
        {type : 'Electrical'},
        {type : 'Plumbing'},
        {type : 'Home Cleaning'},
        {type : 'Tutoring'},
        {type : 'Packaging and Moving'},
        {type : 'Computer Repair'},
        {type : 'Home Repair and Painting'},
        {type : 'Pest Control'}

    ];
    public img: string;

  constructor(public userService: UserService,
              public orderService: OrderService,
              private router: Router,
              private toastController: ToastController,
              private actionSheetController: ActionSheetController,
              private imageService: ImageService,
              private loadingController: LoadingController) { }

  ngOnInit() {
  }

    async toast_price() {
        const toast = await this.toastController.create({
            message: 'please input valid price !',
            duration: 2000
        });
        await toast.present();
    }
    async toast_succ() {
        const toast = await this.toastController.create({
            message: 'Successful !',
            duration: 2000
        });
        await toast.present();
    }

    change2(index) {
        console.log(index.detail.value.type);
        this.order.orderType = index.detail.value.q;

    }

    async takePhoto() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image source',
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.imageService.getImageFromLibrary().then(
                        (imageData) => {

                            // convert base64 to base64Url
                            const base64Image = 'data:image/jpeg;base64,' + imageData;
                            // const parts = this.convertBase64ToBlob(base64);
                            // const file = window.URL.createObjectURL(parts);
                            // this.img=file;

                            const storageRef = firebase.storage().ref('static/photo/' + this.order.orderType + '.jpg');
                            this.presentLoading();
                            storageRef.putString(base64Image, 'data_url').then( snapshot => {
                                console.log('upload successful');
                                // get a url of uploaded img just now
                                storageRef.getDownloadURL().then(url => {

                                    this.loadingDismiss();
                                    this.toast_succ();
                                    this.order.descriptionPicture = url;

                                });
                            }).catch( err => {
                                console.log(err);
                            });


                        }
                    );

                }
            },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.imageService.getImageFromCamera().then(
                            (imageData) => {
                                // const parts = this.convertBase64ToBlob(imageData);
                                // const fileUrl = window.URL.createObjectURL(parts);
                                // this.img=fileUrl;

                                const base64Image = 'data:image/jpeg;base64,' + imageData;
                                // const base64Image =  imageData;
                                const storageRef = firebase.storage().ref('static/photo' + this.order.orderType + 'jpg');
                                this.presentLoading();
                                storageRef.putString(base64Image, 'data_url').then( snapshot => {
                                    console.log('upload successful');
                                    console.log(snapshot);
                                    this.loadingDismiss();
                                    storageRef.getDownloadURL().then(url => {
                                        this.toast_succ();
                                        this.order.descriptionPicture = url;
                                    });
                                }).catch( err => {

                                });

                            }
                        );
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            duration: 2000
        });
        await loading.present();

        console.log('Loading dismissed!');
    }

    loadingDismiss() {
        this.loadingController.dismiss('test').then(() => {
        });
    }

    submit(order: Order){
    // if(this.order.minPrice > this.order.maxPrice){
    //   this.toast_price();
    // }


        this.orderService.createOrder(order).subscribe( order =>{

            console.log('order' + order);
            this.router.navigate(['tabs']);
        })


    }
    private convertBase64ToBlob(Base64Image: any) {
        // SPLIT INTO TWO PARTS
        const parts = Base64Image.split(';base64,');
        // HOLD THE CONTENT TYPE
        const imageType = parts[0].split(':')[1];
        // DECODE BASE64 STRING
        const decodedData = window.atob(parts[1]);
        // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
        const uInt8Array = new Uint8Array(decodedData.length);
        // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // RETURN BLOB IMAGE AFTER CONVERSION
        return new Blob([uInt8Array], { type: imageType });
    }




}
