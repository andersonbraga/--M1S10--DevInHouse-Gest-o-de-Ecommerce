import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailPipeComponent } from './user-email.pipe.component';

describe('UserEmailPipeComponent', () => {
  let component: UserEmailPipeComponent;
  let fixture: ComponentFixture<UserEmailPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmailPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
