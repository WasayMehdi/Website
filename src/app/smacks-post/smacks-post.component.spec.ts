import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmacksPostComponent } from './smacks-post.component';

describe('SmacksPostComponent', () => {
  let component: SmacksPostComponent;
  let fixture: ComponentFixture<SmacksPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmacksPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmacksPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
