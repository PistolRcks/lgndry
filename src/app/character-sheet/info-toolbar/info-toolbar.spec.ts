import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoToolbar } from './info-toolbar';

describe('InfoToolbar', () => {
  let component: InfoToolbar;
  let fixture: ComponentFixture<InfoToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoToolbar]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
