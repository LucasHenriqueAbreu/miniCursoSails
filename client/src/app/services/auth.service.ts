import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { environment } from './../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class AuthService {

	readonly JWT_KEY = "Authorization";
	private apiUrl = environment.api_url;


	constructor(private http: Http) {
	}

	login(email: string, senha: string): Observable<boolean> {
		const params = new URLSearchParams();
		params.append('email', email);
		params.append('password', senha);
		params.append('grant_type', 'password');

		const headers = new Headers({
			'Content-type': 'application/x-www-form-urlencoded',
			'Authorization': 'Basic YXBwOmFwcA=='
		});
		const options = new RequestOptions({ headers: headers });
		const url = `${this.apiUrl}auth`;

		return this.http.post(url, params.toString(), options)
			.map((response: Response) => {
				let token = response.json() && response.json().token;
				if (token) {
					localStorage.setItem(this.JWT_KEY, token);
					return true;
				} else {
					return false;
				}
			});
	}

	public logout(): void {
		localStorage.removeItem(this.JWT_KEY);
	}

	getAuthorization(): string {
		return localStorage.getItem(this.JWT_KEY);
	}

}
