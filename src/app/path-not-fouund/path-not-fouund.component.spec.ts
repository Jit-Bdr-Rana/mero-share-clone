import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNOtFouundComponent } from './path-not-fouund.component';

describe('PathNOtFouundComponent', () => {
  let component: PathNOtFouundComponent;
  let fixture: ComponentFixture<PathNOtFouundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathNOtFouundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNOtFouundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
