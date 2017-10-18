import { Todo } from './../models/todo';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodoService {

	private apiUrl = environment.api_url;


	constructor(private httpClient: HttpClient) {
	}

	findAll(): Observable<Todo[]> {
		return this.httpClient.get<Todo[]>(`${this.apiUrl}todo/`);
	}

	save(todo: Todo): Observable<Todo> {
		if (todo.id) {
			return this.httpClient.put<Todo>(`${this.apiUrl}todo/${todo.id}`, todo);
		} else {
			return this.httpClient.post<Todo>(`${this.apiUrl}todo`, todo);
		}
	}

	delete(id: string): Observable<Todo> {
		return this.httpClient.delete<Todo>(`${this.apiUrl}todo/${id}`);
	}

	edit(id: string, todo: Todo): Observable<Todo> {
		return this.httpClient.put<Todo>(`${this.apiUrl}todo/${id}`, Todo);
	}

}
