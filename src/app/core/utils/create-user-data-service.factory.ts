import {CrudService} from "@services/crud.service";
import {HttpClient} from "@angular/common/http";
import {UserDataService} from "@services/user-data.service";
import {User} from "@core/models/user";

export function createUserDataService<T>(http: HttpClient, apiUrl: string): UserDataService {
  return new UserDataService(new CrudService<User>(http, apiUrl));
}
