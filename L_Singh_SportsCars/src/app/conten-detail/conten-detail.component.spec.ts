import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenDetailComponent } from './conten-detail.component';

describe('ContenDetailComponent', () => {
  let component: ContenDetailComponent;
  let fixture: ComponentFixture<ContenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
