import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsVendorPage } from './tabs-vendor.page';

describe('TabsVendorPage', () => {
  let component: TabsVendorPage;
  let fixture: ComponentFixture<TabsVendorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsVendorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsVendorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
