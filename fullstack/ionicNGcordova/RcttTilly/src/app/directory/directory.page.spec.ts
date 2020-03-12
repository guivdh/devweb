import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { directoryPage } from './directory.page';

describe('directoryPage', () => {
  let component: directoryPage;
  let fixture: ComponentFixture<directoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [directoryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(directoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
