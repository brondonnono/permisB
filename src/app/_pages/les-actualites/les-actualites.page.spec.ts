import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesActualitesPage } from './les-actualites.page';

describe('LesActualitesPage', () => {
  let component: LesActualitesPage;
  let fixture: ComponentFixture<LesActualitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesActualitesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesActualitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
