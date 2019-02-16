import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmacksComponent } from './smacks.component';

describe('SmacksComponent', () => {
  let component: SmacksComponent;
  let fixture: ComponentFixture<SmacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
