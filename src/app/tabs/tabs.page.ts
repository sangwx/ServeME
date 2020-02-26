import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    public userName: string;
    constructor(public activeRoute: ActivatedRoute,
                private router: Router,
                public userService:UserService) {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.userName = params['name'];
            //
            // console.log("jump to tab1,name: " + this.userName);
            // this.router.navigate([`tabs/tab1/${this.userName}`])
        });


    }

    ngOnInit(): void {

    }

    // public onOpenItem(item: any) {
    //     this.router.navigate([`tabs/tab2/${item.id}`]);
    // }
}
