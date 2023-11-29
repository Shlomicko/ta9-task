import {Injectable, TrackByFunction} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackByService<Item = any> {

  byProperty(prop: keyof Item): TrackByFunction<Item> {
    return (index, item) => item[prop];
  }

  byIndex(): TrackByFunction<Item> {
    return (index, item) => index;
  }
}
