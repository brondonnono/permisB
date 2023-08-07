import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesCoursPage } from './les-cours.page';

describe('LesCoursPage', () => {
  let component: LesCoursPage;
  let fixture: ComponentFixture<LesCoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesCoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
