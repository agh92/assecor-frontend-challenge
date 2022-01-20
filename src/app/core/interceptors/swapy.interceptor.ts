import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { filter, of, tap } from 'rxjs';
import { SwapyCacheService } from '../services/swapy-cache.service';

@Injectable()
export class SwapyInterceptor implements HttpInterceptor {
  constructor(private swapyCacheService: SwapyCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.swapyCacheService.shouldCache(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.swapyCacheService.get(req);

    return cachedResponse ? of(cachedResponse) : this.sendAndSaveResponse(next, req);
  }

  private sendAndSaveResponse(next: HttpHandler, req: HttpRequest<any>) {
    return next.handle(req).pipe(
      filter((event) => event instanceof HttpResponse),
      tap((event) => this.swapyCacheService.put(req, event as HttpResponse<unknown>))
    );
  }
}
