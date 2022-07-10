import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentData } from '@angular/fire/firestore';
import { object } from 'rxfire/database';
import { Observable } from 'rxjs';
import Product from 'src/app/interfaces/product.interface';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

import { FoodListComponent } from './food-list.component';


describe('FoodListComponent', () => {
    let component: FoodListComponent;
    let fixture: ComponentFixture<FoodListComponent>;

    class FirestoreServiceMock {
        getDataProducts(){
            return Observable<any>
        }
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FoodListComponent],
            providers: [{
                provide: FirestoreService, useClass: FirestoreServiceMock
            }]
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
