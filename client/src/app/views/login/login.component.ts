import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginModel: any = {};
	error = '';
	constructor(private router: Router,
		private authService: AuthService) { }

	ngOnInit() {
		this.authService.logout();
	}

	login() {
		this.authService.login(this.loginModel.email, this.loginModel.password)
			.subscribe(result => {
				this.router.navigate(['/']);
			}, err => {
				console.log(err);
				this.error = 'Usuário ou senha incorretos';
			});
	}
}
