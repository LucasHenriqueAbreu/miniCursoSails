import { Token } from './../models/token';
import { Todo } from './../models/todo';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

	private apiUrl = environment.api_url;


	constructor(private httpClient: HttpClient) {
	}

	findAll(): Observable<User[]> {
		return this.httpClient.get<User[]>(`${this.apiUrl}user/`);
	}

	save(user: User): Observable<Token> {
		if (user.id) {
			return this.httpClient.put<Token>(`${this.apiUrl}user/${user.id}`, user);
		} else {
			return this.httpClient.post<Token>(`${this.apiUrl}user`, user);
		}
	}

	delete(id: string): Observable<User> {
		return this.httpClient.delete<User>(`${this.apiUrl}user/${id}`);
	}

}
