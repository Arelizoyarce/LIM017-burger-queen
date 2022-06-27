<<<<<<< HEAD
import { UserCredential } from "@angular/fire/auth/firebase";
import { DocumentData} from "@angular/fire/firestore/firebase";

export class FirestoreServiceMock {
    getUserRole: () => Promise<DocumentData>;
    login: () => Promise<UserCredential>
=======
import { DocumentData } from "@angular/fire/firestore";

export class FirestoreServiceMock {
    getUserRole(): Promise<DocumentData> {
        return Promise.resolve({obj:{role: 'chef'}})}
>>>>>>> 37494a39cbc180ba413bf9702bb543afe2b48859
}
