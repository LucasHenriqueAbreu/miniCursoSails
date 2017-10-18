import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { UserComponent } from "./user.component";

@NgModule({
	declarations: [
		UserComponent,
	],
	exports: [UserComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatInputModule,
        FlexLayoutModule,
        MatButtonModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "pt-BR" },
		UserService
	]
})
export class UserModule { }
