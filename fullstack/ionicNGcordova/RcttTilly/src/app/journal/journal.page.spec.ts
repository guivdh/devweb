import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { journalPage } from './journal.page';

describe('journalPage', () => {
  let component: journalPage;
  let fixture: ComponentFixture<journalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [journalPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(journalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
