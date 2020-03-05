import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorProfilePage } from './vendor-profile.page';

describe('VendorProfilePage', () => {
  let component: VendorProfilePage;
  let fixture: ComponentFixture<VendorProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
