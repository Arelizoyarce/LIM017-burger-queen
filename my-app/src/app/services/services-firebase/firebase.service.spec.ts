import { TestBed } from '@angular/core/testing';
import { Auth, User, UserCredential } from '@angular/fire/auth';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let auth: jasmine.SpyObj<Auth>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Auth', ['login'])
      TestBed.configureTestingModule({
        providers: [ FirebaseService, {provide: Auth, useValue: spy}]
      });
      service = TestBed.inject(FirebaseService);
      auth = TestBed.inject(Auth) as jasmine.SpyObj<Auth>
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getValue should return stubbed value from a spy', () => {
  //   const stubValue = 'stub value';
  //   auth.login.and.returnValue(stubValue);
  
  //   expect(masterService.getValue())
  //     .toBe(stubValue, 'service returned stub value');
  //   expect(valueServiceSpy.getValue.calls.count())
  //     .toBe(1, 'spy method was called once');
  //   expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
  //     .toBe(stubValue);
  // });


   //PREGUNTAR A CARLOS 
  // it('#login should return value from a promise',
  //   (done: DoneFn) => {
  //     service.login('mesera@cycysburger.com', 'laboratoria').then(value => {
  //       console.log('SOY VALUEEEE', value)
  //       expect(value).toBe(Promise<UserCredential>)
  //       done();
  //     });
  // });

});
