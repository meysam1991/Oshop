import 'rxjs/add/operator/map';

import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  CanActivate() {
    this.auth.user$.map((user) => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }
}
