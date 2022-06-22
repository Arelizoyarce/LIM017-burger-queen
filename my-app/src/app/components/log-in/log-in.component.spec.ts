import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseService } from 'src/app/services/services-firebase/firebase.service';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import { FirestoreServiceMock } from 'src/app/__mocks__/firestore.service.mock';
import { FirebaseServiceMock } from 'src/app/__mocks__/firebase.service.mock';
import { MatSnackBarModule} from '@angular/material/snack-bar';

import { LogInComponent } from '../../components/log-in/log-in.component';

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
  it('Debe retornar formulario invalido si algún campo está vacío', () => {

  });
});
