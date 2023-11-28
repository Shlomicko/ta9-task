import {Injectable} from '@angular/core';
import {icons} from '@core/config/icons-table';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class IconsRegistryService {
  private iconsTable = icons

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  register(): void {
    Object.keys(this.iconsTable).forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(this.iconsTable[key]));
    })
  }
}
