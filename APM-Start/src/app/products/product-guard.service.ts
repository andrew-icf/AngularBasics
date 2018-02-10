import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = +route.url[1].path;
      if (isNaN(id) || id < 1) {
          alert('Id is invalid, llama llama llama');// normally we would route to an error page that would notify the user of the problem
          this._router.navigate(['/products']);
          return false;
      }
      return true;
  }
}
