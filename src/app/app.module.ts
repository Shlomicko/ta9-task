import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchBarModule} from "@UI/search-bar/search-bar.module";
import {UserDataService} from "@services/user-data.service";
import {createUserDataService} from "@core/utils/create-user-data-service.factory";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {API_URL} from "@core/config/api.config";
import {User} from "@core/models/user";
import {StoreModule} from "@ngrx/store";
import {showUserFormReducer, usersReducer} from "@store/app.reducer";
import {IconsRegistryService} from "@services/icons-registry.service";
import {iconInitializer} from "@core/utils/icons-initilizer";
import {UsersPanelModuleModule} from "@UI/users-panel/users-panel.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SearchBarModule,
    UsersPanelModuleModule,
    StoreModule.forRoot({users: usersReducer, userForm: showUserFormReducer})
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com/'
    },
    {
      provide: UserDataService,
      useFactory: (http: HttpClient, apiUrl: string) => createUserDataService<User>(http, apiUrl),
      deps: [HttpClient, API_URL]
    },
    IconsRegistryService,
    {
      provide: APP_INITIALIZER,
      useFactory: iconInitializer,
      multi: true,
      deps: [IconsRegistryService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
