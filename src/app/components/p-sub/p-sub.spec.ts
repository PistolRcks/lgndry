import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PSub } from './p-sub';

describe('PSub', () => {
  let component: PSub;
  let fixture: ComponentFixture<PSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PSub]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PSub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
