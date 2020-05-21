import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRouteViewComponent } from './inicio-route-view.component';

describe('InicioRouteViewComponent', () => {
  let component: InicioRouteViewComponent;
  let fixture: ComponentFixture<InicioRouteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRouteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRouteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
