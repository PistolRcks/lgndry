import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesContainer } from './abilities-container';

describe('AbilitiesContainer', () => {
  let component: AbilitiesContainer;
  let fixture: ComponentFixture<AbilitiesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesContainer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AbilitiesContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
