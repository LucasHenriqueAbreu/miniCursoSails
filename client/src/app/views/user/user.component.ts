import { Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	
	user: User = new User();
	error = '';
	readonly JWT_KEY = "Authorization";

	constructor(private router: Router,private userService: UserService) { }

	ngOnInit() {
	}

	save() {
		this.userService.save(this.user).subscribe(res => {
			if (res.token) {
				localStorage.setItem(this.JWT_KEY, res.token);
				this.router.navigate(['/']);
			}
		}, err => {
			this.error = err;
		});
	}
}
