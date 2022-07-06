import { TestBed } from '@angular/core/testing';
import { Auth, User, UserCredential } from '@angular/fire/auth';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    const authFake = {}
    service = new FirebaseService(authFake as Auth);
  });
  // TestBed.configureTestingModule({});
  // service = TestBed.inject(FirebaseService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


   //PREGUNTAR A CARLOS 
  it('#login should return value from a promise',
    (done: DoneFn) => {
      service.login('mesera@cycysburger.com', 'laboratoria').then(value => {
        console.log('SOY VALUEEEE', value)
        expect(value).toBe(Promise<UserCredential>)
        done();
      });
  });

});
