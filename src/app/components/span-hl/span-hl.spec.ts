import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpanHl } from './span-hl';

describe('SpanHl', () => {
  let component: SpanHl;
  let fixture: ComponentFixture<SpanHl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpanHl]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpanHl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
