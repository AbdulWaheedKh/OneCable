import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakageComponentComponent } from './pakage-component.component';

describe('PakageComponentComponent', () => {
  let component: PakageComponentComponent;
  let fixture: ComponentFixture<PakageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
