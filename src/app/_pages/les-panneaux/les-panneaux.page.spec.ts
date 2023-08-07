import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesPanneauxPage } from './les-panneaux.page';

describe('LesPanneauxPage', () => {
  let component: LesPanneauxPage;
  let fixture: ComponentFixture<LesPanneauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesPanneauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesPanneauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
