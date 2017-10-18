import { TodoService } from './../../services/todo.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { TodoComponent } from "./todo.component";

@NgModule({
	declarations: [
		TodoComponent,
	],
	exports: [TodoComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatListModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "pt-BR" },
		TodoService
	]
})
export class TodoModule { }
