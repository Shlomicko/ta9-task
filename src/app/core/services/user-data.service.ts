import {Injectable} from '@angular/core';
import {User} from "@core/models/user";
import {Observable} from "rxjs";
import {CrudService} from "@services/crud.service";

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(readonly crudService: CrudService<User>) {
  }

  getUsers(): Observable<User[]> {
    return this.crudService.getAll('users');
  }

}
