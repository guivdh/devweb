import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMemberPage } from './error-member.page';

describe('ErrorMemberPage', () => {
  let component: ErrorMemberPage;
  let fixture: ComponentFixture<ErrorMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
