import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CErroComponent } from './c-erro.component';

describe('CErroComponent', () => {
  let component: CErroComponent;
  let fixture: ComponentFixture<CErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CErroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
