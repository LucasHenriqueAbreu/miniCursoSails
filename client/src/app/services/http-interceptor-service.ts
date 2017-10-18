import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from "./auth.service";


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

	constructor(public authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token = this.authService.getAuthorization();

		const authReq = req.clone({
			headers:
			req.headers
				.set('Authorization', `bearer ${token}`)
				.set('Content-Type', 'application/json')
		});

		const started = Date.now();

		return next
			.handle(authReq)
			.do(event => {
				if (event instanceof HttpResponse) {
					const elapsed = Date.now() - started;
					console.log(`>>>>> Request for ${req.urlWithParams} took ${elapsed} ms.`);
				}
			}, err => {
				if (err.status === 401) {
					console.log(`>>>>> ${err.status}`);
					this.authService.logout();
				}
			});
	}
}
