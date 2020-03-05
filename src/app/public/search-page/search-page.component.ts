import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  constructor(private modalController: ModalController,
              private nav:NavController) { }

  ngOnInit() {}
    closeModal()
    {
        this.modalController.dismiss();
    }



    getItems(e){
       console.log('search' + e);
    }

}
