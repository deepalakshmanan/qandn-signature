import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitAssistantComponent } from './fit-assistant.component';

describe('FitAssistantComponent', () => {
  let component: FitAssistantComponent;
  let fixture: ComponentFixture<FitAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
