import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { FirebaseService } from 'src/app/services/services-firebase/firebase.service';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import { FirestoreServiceMock } from 'src/app/__mocks__/firestore.service.mock';
import { FirebaseServiceMock } from 'src/app/__mocks__/firebase.service.mock';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
// import { Routes } from 'src/app/app-routing.module';
import { RouterLinkWithHref } from '@angular/router'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LogInComponent } from '../../components/log-in/log-in.component';
import { Router } from '@angular/router';


describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      declarations: [ LogInComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers:[{provide: FirebaseService, useClass: FirebaseServiceMock},
        {provide: FirestoreService, useClass: FirestoreServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Está creado', () => {
    expect(component).toBeTruthy();
  });
  //Validación de formulario
  it('Debe retornar formulario invalido si algún campo está vacío', () => {
    const email = component.dataUser.controls['email']
    email.setValue('mesera@cicysburger.com');
    expect(component.dataUser.invalid).toBeTrue();
  });
  it('Debe retornar formulario valido todo está relleno', () => {
    const email = component.dataUser.controls['email']
    const password = component.dataUser.controls['password']
    email.setValue('mesera@cicysburger.com');
    password.setValue('laboratoria');
    expect(component.dataUser.invalid).toBeFalse();
  });
  //Validar botón
  it('Debe llamar al método submit', () => {
   const btn = fixture.debugElement.query(By.css('.btnSubmit'))
   const router = TestBed.inject(Router);
   let location: Location;
   btn.nativeElement.click()
   const expectPath = '/chef-'
  component.submit()
  .then(()=>{
    expect(location.path()).toBe(expectPath)
  })
  });
  // it('Debe ir a la otra ruta', () => waitForAsync (() =>{
  //   fixture.detectChanges();
  //   let btnElement = fixture.debugElement.queryAll(By.css('.btnSubmit'))
  //   btnElement[0].nativeElement.click()
  //   fixture.whenStable().then(()=>{
  //     const location: Location = TestBed.inject(Location);
  //     expect(location.path()).toEqual('/take');
  //   })
  // }));

})

