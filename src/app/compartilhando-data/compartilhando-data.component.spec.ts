import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhandoDataComponent } from './compartilhando-data.component';

describe('CompartilhandoDataComponent', () => {
  let component: CompartilhandoDataComponent;
  let fixture: ComponentFixture<CompartilhandoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompartilhandoDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompartilhandoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
