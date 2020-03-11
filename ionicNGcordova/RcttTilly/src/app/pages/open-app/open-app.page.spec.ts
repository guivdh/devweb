import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenAppPage } from './open-app.page';

describe('OpenAppPage', () => {
  let component: OpenAppPage;
  let fixture: ComponentFixture<OpenAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
