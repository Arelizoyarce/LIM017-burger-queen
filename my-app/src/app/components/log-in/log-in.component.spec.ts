import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from 'src/app/services/services-firebase/firebase.service';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LogInComponent } from '../log-in/log-in.component';
import { DocumentData } from '@angular/fire/firestore';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  class FirebaseServiceMock {
    login(email: string): Promise<any> {
      let id = '';
      if (email === 'mesera@cicysburger.com') {
        id = 'dR7eRoYwmYcKHXVvMQm4SoRXSKm3'
      }else if(email === 'cocinera@cicysburger.com'){
        id = 'dR7eRoYwmYcKHXVvMQm4SoRXSKm'
      }
      return Promise.resolve({
        user: {
          email: email,
          uid: id
        },
        operationType: "signIn",
        providerId: null,
      })
    }
  }

  class FirestoreServiceMock {
    getUserRole(id: string): Promise<DocumentData> {
      if (id === 'dR7eRoYwmYcKHXVvMQm4SoRXSKm') {
        return Promise.resolve({ role: 'chef' })
      } else if (id === 'dR7eRoYwmYcKHXVvMQm4SoRXSKm3') {
        return Promise.resolve({ role: 'waiter' })
      }
      return Promise.resolve({})
    }
  }
  
  let mockRouter = {

    navigate: jasmine.createSpy('navigate').and.callFake(() => {
      console.log("EJECUTO este SPY")
    })
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
      ],
      declarations: [LogInComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: FirebaseService, useClass: FirebaseServiceMock },
        { provide: FirestoreService, useClass: FirestoreServiceMock }
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

  it('Debe navegar a waiter view', fakeAsync(() => {
    console.log("Esta cosa", component.dataUser)
    const email = component.dataUser.controls['email']
    const password = component.dataUser.controls['password']
    email.setValue('mesera@cicysburger.com');
    password.setValue('laboratoria');

    const btn = fixture.debugElement.query(By.css('.btnSubmit'))
    setTimeout(() => {
      btn.nativeElement.click()
    }, 50);
    tick(100);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/take-orders']);
  }));

  it('Debe navegar a chef view', fakeAsync(() => {
    console.log("Esta cosa", component.dataUser)
    const email = component.dataUser.controls['email']
    const password = component.dataUser.controls['password']
    email.setValue('cocinera@cicysburger.com');
    password.setValue('laboratoria');

    const btn = fixture.debugElement.query(By.css('.btnSubmit'))
    setTimeout(() => {
      btn.nativeElement.click()
    }, 50);
    tick(100);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/chef-view']);
  }));
});
