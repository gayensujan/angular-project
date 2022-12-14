import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentComponent } from './resturent.component';

describe('ResturentComponent', () => {
  let component: ResturentComponent;
  let fixture: ComponentFixture<ResturentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
