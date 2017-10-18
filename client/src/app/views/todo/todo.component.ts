import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todos: Todo[] = []
	todo: Todo = new Todo();
	
	constructor(private todoService: TodoService) { }

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		let self = this;
		self.todoService.findAll().subscribe(res => {
			self.todos = [];
			self.todos = res;
		}, err => {
			console.log(err);
		})
	}

	save() {
		let self = this;
		self.todoService.save(self.todo).subscribe(res => {
			console.log(res);
			self.todos.push(res);
			self.todo = new Todo();
		}, err => {
			console.log(err);
		})
	}

	delete(id: string) {
		let self = this;
		self.todoService.delete(id).subscribe(res => {
			console.log(res);
			self.todos = self.todos.filter(item => item.id !== id);
		}, err => {
			console.log(err);
		})
	}

}
