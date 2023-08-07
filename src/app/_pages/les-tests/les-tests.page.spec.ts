import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesTestsPage } from './les-tests.page';

describe('LesTestsPage', () => {
  let component: LesTestsPage;
  let fixture: ComponentFixture<LesTestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesTestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesTestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
