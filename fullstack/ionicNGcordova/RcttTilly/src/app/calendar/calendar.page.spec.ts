import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { calendarPage } from './calendar.page';

describe('calendarPage', () => {
  let component: calendarPage;
  let fixture: ComponentFixture<calendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [calendarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(calendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
