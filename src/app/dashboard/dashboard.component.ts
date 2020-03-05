import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public type: string;

  constructor(private router: Router) { }

  ngOnInit() {}

    newRequest(){
        this.router.navigate(['new-request'])
    }

    typedRequest1(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'Appliance'
            }
        });
    }
    typedRequest2(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'ComputerRepair'
            }
        });
    }
    typedRequest3(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'Plumbing'
            }
        });
    }
    typedRequest4(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'Tutoring'
            }
        });
    }
    typedRequest5(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'Electrical'
            }
        });
    }
    typedRequest6(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'HomeCleaning'
            }
        });
    }
    typedRequest7(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'PackagingAndMoving'
            }
        });
    }
    typedRequest8(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'Paint'
            }
        });
    }
    typedRequest9(){
        this.router.navigate(['typed-request'], {
            queryParams: {
                type: 'PestControl'
            }
        });
    }



}
