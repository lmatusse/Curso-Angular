import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgswitchComponent } from './directiva-ngswitch.component';

describe('DirectivaNgswitchComponent', () => {
  let component: DirectivaNgswitchComponent;
  let fixture: ComponentFixture<DirectivaNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
