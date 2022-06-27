import { UserCredential } from "@angular/fire/auth/firebase";
import { DocumentData} from "@angular/fire/firestore/firebase";

export class FirestoreServiceMock {
    getUserRole: () => Promise<DocumentData>;
    login: () => Promise<UserCredential>
}
