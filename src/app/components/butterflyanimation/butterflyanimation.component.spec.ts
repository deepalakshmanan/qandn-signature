import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyanimationComponent } from './butterflyanimation.component';

describe('ButterflyanimationComponent', () => {
  let component: ButterflyanimationComponent;
  let fixture: ComponentFixture<ButterflyanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButterflyanimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButterflyanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
