import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { SWAPY_BASE_URL } from './swapy.service';

@Injectable({
  providedIn: 'root',
})
export class SwapyCacheService {
  private cache = new Map<string, HttpResponse<unknown>>();

  constructor() {}

  public shouldCache(request: HttpRequest<unknown>) {
    return request.method === 'GET' && request.url.startsWith(SWAPY_BASE_URL);
  }

  public get(request: HttpRequest<unknown>): HttpResponse<unknown> | undefined {
    return this.cache.get(request.url);
  }

  public put(request: HttpRequest<unknown>, response: HttpResponse<unknown>) {
    this.cache.set(request.url, response);
  }
}
