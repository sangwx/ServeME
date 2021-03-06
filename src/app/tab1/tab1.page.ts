import { Component, OnInit } from '@angular/core';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    Environment
} from '@ionic-native/google-maps/ngx';
import {Platform} from '@ionic/angular';
import {ActivatedRoute, Params} from '@angular/router';
import { NavController,NavParams} from '@ionic/angular';
import { User } from '../Model/user';
import {UserService} from '../service/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchPageComponent } from '../public/search-page/search-page.component';
import {DashboardComponent} from '../dashboard/dashboard.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
    map: GoogleMap;
    userName: string;
    items=[
        'aaa',
        'bbb',
        'ccc'
    ];
    type: string;


  constructor(private platform: Platform,
              public activeRoute: ActivatedRoute,
              public navCtrl: NavController,
              private userService: UserService,
              private toastController: ToastController,
              private router: Router,
              private modalController: ModalController,
             ) {

      this.userName = this.userService.userName;
      console.log('tab1' + this.userName);

  }

    async toast_succ() {
        const toast = await this.toastController.create({
            message: 'Refresh Successfully ' + this.userName,
            duration: 2000
        });
        await toast.present();
    }

    async ngOnInit() {
        this.userName = this.userService.userName;
        await this.platform.ready();
        await this.loadMap()
        const myModal = await this.modalController.create({
            component: DashboardComponent,
            cssClass: 'my-custom-modal-css'
        });
        return await myModal.present();

    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {

        // This code is necessary for browser
        Environment.setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
            'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
        });

        let mapOptions: GoogleMapOptions = {
            camera: {
                target: {
                    lat: 32.7291274,
                    lng: -97.1142801
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = GoogleMaps.create('map_canvas', mapOptions);

        let marker: Marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 32.7291274,
                lng: -97.1142801
            }
        });
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            alert('clicked');
        });
     }

    doRefresh(event) {
        this.toast_succ();

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1000);
    }

    getItems(ev:any){
        const query = ev.target.value.toLowerCase();
        requestAnimationFrame(() => {
            this.items.forEach(item => {
                if(item == query){
                    console.log('YES' + item);
                }});
        });
    }

    async showModal(){
          const modal = await this.modalController.create({ component: SearchPageComponent });
          return await modal.present();
      }

    newRequest(){
        this.router.navigate(['new-request'])
    }




}
