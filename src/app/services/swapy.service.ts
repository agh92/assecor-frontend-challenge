import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapyObject } from '../model/swapy.object';
import { catchError, EMPTY, firstValueFrom, map, mergeMap, Observable, pipe, toArray } from 'rxjs';

export enum SwapyResource {
  People = 'https://swapi.dev/api/people',
  Planets = 'https://swapi.dev/api/planets',
  Films = 'https://swapi.dev/api/films',
}

const getIdOfUrl = (objectUrl: string) => {
  const url = new URL(objectUrl);
  const pathParts = url.pathname.split('/');
  return pathParts[pathParts.length - 2];
};

const addId = <T extends SwapyObject>() => {
  return pipe(
    map((result: T) => {
      const id = getIdOfUrl(result.url);
      return { ...result, id } as T;
    })
  );
};

@Injectable({
  providedIn: 'root',
})
export class SwapyService {
  constructor(private httpClient: HttpClient) {}

  public getResource$<T extends SwapyObject>(resource: SwapyResource) {
    return this.httpClient.get<{ results: T[] }>(resource).pipe(
      mergeMap((data) => data.results),
      addId(),
      toArray<T>(),
      catchError(() => EMPTY)
    );
  }

  public getElements<T extends SwapyObject>(urls: string[]): Promise<T[]> {
    const promises = urls.map((url) => firstValueFrom(this.httpClient.get<T>(url).pipe(addId())));
    return Promise.all(promises);
  }

  public getElement$<T extends SwapyObject>(resource: SwapyResource, id: string): Observable<T> {
    return this.httpClient.get<T>(`${resource}/${id}`).pipe(addId());
  }
}
