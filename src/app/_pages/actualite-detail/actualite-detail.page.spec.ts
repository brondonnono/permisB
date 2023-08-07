import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualiteDetailPage } from './actualite-detail.page';

describe('ActualiteDetailPage', () => {
  let component: ActualiteDetailPage;
  let fixture: ComponentFixture<ActualiteDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualiteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
