import { DocumentData } from "@angular/fire/firestore/firebase";

export class FirestoreServiceMock {
    getUserRole: () => Promise<DocumentData>
}
