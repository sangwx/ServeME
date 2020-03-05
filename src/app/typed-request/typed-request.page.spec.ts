import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypedRequestPage } from './typed-request.page';

describe('TypedRequestPage', () => {
  let component: TypedRequestPage;
  let fixture: ComponentFixture<TypedRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypedRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
