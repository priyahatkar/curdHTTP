import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConforimDeleteComponent } from './conforim-delete.component';

describe('ConforimDeleteComponent', () => {
  let component: ConforimDeleteComponent;
  let fixture: ComponentFixture<ConforimDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConforimDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConforimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
