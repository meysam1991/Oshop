import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs/internal/Observable';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
  Login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }
}
