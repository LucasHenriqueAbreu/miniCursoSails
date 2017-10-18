import { AuthService } from './../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from "./login.component";
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		LoginComponent,
	],
	exports: [LoginComponent],
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
		AuthService
	]
})
export class LoginModule { }
