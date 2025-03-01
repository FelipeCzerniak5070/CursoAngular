import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEntreCompComponent } from './com-entre-comp.component';

describe('ComEntreCompComponent', () => {
  let component: ComEntreCompComponent;
  let fixture: ComponentFixture<ComEntreCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComEntreCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEntreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
