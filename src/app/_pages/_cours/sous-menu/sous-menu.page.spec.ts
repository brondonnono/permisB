import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SousMenuPage } from './sous-menu.page';

describe('SousMenuPage', () => {
  let component: SousMenuPage;
  let fixture: ComponentFixture<SousMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SousMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
