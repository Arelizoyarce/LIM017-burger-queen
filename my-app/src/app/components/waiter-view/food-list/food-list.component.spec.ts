import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import { FirestoreServiceMock } from 'src/app/__mocks__/firestore.service.mock';

import { FoodListComponent } from './food-list.component';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListComponent ],
      providers:[{ provide: FirestoreService, useClass: FirestoreServiceMock }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
