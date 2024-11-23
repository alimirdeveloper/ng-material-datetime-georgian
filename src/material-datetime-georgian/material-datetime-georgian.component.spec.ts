import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindboardDatetimeGeorgianComponent } from './mindboard-datetime-georgian.component';

describe('MindboardDatetimeGeorgianComponent', () => {
  let component: MindboardDatetimeGeorgianComponent;
  let fixture: ComponentFixture<MindboardDatetimeGeorgianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindboardDatetimeGeorgianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindboardDatetimeGeorgianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
