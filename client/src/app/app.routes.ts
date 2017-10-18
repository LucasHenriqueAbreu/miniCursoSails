import { UserComponent } from './views/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";
import { TodoComponent } from "./views/todo/todo.component";
import { blankComponent } from "./common/layouts/blank.component";
import { BasicComponent } from "./common/layouts/basic.component";
import { ModuleWithProviders } from "@angular/core/src/metadata";

const routes: Routes = [
	// Main redirect
	{ path: '', redirectTo: 'todo', pathMatch: 'full' },

	// App views
	{
		path: '', component: BasicComponent,
		children: [
			{
				path: 'todo',
				component: TodoComponent
			}
		]
	},
	{
		path: '', component: blankComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'user',
				component: UserComponent
			}
		]
	},

	// Página não encontrada seria melhor
	{ path: '**', component: LoginComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
