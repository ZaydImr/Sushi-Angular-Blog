import { Injectable } from '@angular/core';
import { UserCredential, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  loginWithPopup(provider?: string): Promise<UserCredential> {
    let authProvider;
    switch(provider){
      case 'fb': authProvider = new FacebookAuthProvider(); break;
      default:  authProvider = new GoogleAuthProvider();
    }
    return signInWithPopup(getAuth(), authProvider);
  }

  logout(): Promise<void> {
    return signOut(getAuth());
  }

  forgotPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(getAuth(), email);
  }
}
