import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteadorComponent } from './roteador.component';

describe('RoteadorComponent', () => {
  let component: RoteadorComponent;
  let fixture: ComponentFixture<RoteadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoteadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
