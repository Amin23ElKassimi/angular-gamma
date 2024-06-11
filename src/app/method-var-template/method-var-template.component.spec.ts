import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodVarTemplateComponent } from './method-var-template.component';

describe('MethodVarTemplateComponent', () => {
  let component: MethodVarTemplateComponent;
  let fixture: ComponentFixture<MethodVarTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodVarTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodVarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
