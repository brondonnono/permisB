import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignificationPage } from './signification.page';

describe('SignificationPage', () => {
  let component: SignificationPage;
  let fixture: ComponentFixture<SignificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
