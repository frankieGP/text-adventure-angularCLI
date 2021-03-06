/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DarkComponent } from './dark.component';

describe('DarkComponent', () => {
  let component: DarkComponent;
  let fixture: ComponentFixture<DarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
