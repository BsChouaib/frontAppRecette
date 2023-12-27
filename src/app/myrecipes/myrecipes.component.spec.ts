import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipesComponent } from './myrecipes.component';

describe('MyrecipesComponent', () => {
  let component: MyrecipesComponent;
  let fixture: ComponentFixture<MyrecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyrecipesComponent]
    });
    fixture = TestBed.createComponent(MyrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
