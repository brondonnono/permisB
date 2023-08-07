import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimpleChatPage } from './simple-chat.page';

describe('SimpleChatPage', () => {
  let component: SimpleChatPage;
  let fixture: ComponentFixture<SimpleChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
