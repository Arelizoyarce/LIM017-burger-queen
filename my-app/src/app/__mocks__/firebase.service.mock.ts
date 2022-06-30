import { UserCredential } from "@angular/fire/auth";

export class FirebaseServiceMock {
    login(): Promise<any> {
    return Promise.resolve({
        user: {
            email: 'cocinera@cicysburger.com',
            uid: 'dR7eRoYwmYcKHXVvMQm4SoRXSKm2'
        },
        operationType: "signIn",
        providerId: null,
    })
}
}