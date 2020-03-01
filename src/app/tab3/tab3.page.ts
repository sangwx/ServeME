import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as firebase from 'firebase';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from '../service/image.service';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    user : User;
    userName: string;
    photo: string;
    default_photoUrl: './icon.jpg';

  constructor(private router: Router,
              private userService: UserService,
              private actionSheetController: ActionSheetController,
              private imageService: ImageService,
              private loadingController: LoadingController) {

      //this.userName = this.userService.userName;
      this.userService.getUserInfo(this.userService.user).subscribe(res => {
          console.log('getUserInfo' + res);
      })
  }
    ngOnInit() {
        this.user = this.userService.user;
        this.userName = this.userService.userName;
    }


  Signout() {
      this.clearToken();
      console.log('setup');
  }

  PersonInfo() {
      console.log('TTT');
  }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image source',
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.imageService.getImageFromLibrary().then(
                        (imageData) => {
                            // convert base64 to base64Url
                            const base64Image = 'data:image/jpeg;base64,' + imageData;
                            // const base64Image =  imageData;
                            const storageRef = firebase.storage().ref('static/photo/' + this.userName + '.jpg');
                            this.presentLoading();
                            storageRef.putString(base64Image, 'data_url').then( snapshot => {
                                console.log('upload successful');
                                // get a url of uploaded img just now
                                storageRef.getDownloadURL().then(url => {
                                    // loading end
                                    this.loadingDismiss();

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
                                const base64Image = 'data:image/jpeg;base64,' + imageData;
                                // const base64Image =  imageData;
                                const storageRef = firebase.storage().ref('static/photo' + this.userName + 'jpg');
                                this.presentLoading();
                                storageRef.putString(base64Image, 'data_url').then( snapshot => {
                                    console.log('upload successful');
                                    console.log(snapshot);
                                    this.loadingDismiss();
                                    storageRef.getDownloadURL().then(url => {

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

  // testFirebase() {
  //     const storageRef = firebase.storage().ref('static/test/' + 222 + '.jpg');
  //     // storageRef.put()
  //     const img64Url = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nn**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'
  //     storageRef.putString(img64Url, 'data_url').then( snapshot => {
  //             console.log('upload successful');
  //             // get a url of uploaded img just now
  //             storageRef.getDownloadURL().then(url => {
  //                 console.log(url);
  //                  this.photo = url;
  //
  //             });
  //   });
  // }

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


    clearToken() {
        window.localStorage.setItem('jwt', null);
    }

}
