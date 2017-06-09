import { Component, OnInit } from '@angular/core';

import { Users } from './shared/users.model';
import { UsersService } from './shared/users.service';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
	styleUrls : ['./users.component.scss'],
	providers: [UsersService]
})

export class UsersComponent implements OnInit {
	users: Users[] = [];

	constructor(private usersService: UsersService) { }

	ngOnInit() {
		this.usersService.getList().subscribe((res) => {
			this.users = res;
		});
	}
}

/*
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Users } from './shared/users.model';
import { UsersService } from './shared/users.service';
import { Subscription } from "rxjs/Subscription";
import { LoginService } from "./login";

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
	styleUrls: ['./users.component.scss'],
	providers: [UsersService]
})

export class UsersComponent implements OnDestroy {
	private loginEnt: Subscription;
	username: string;
	password: string;
	message: string;
	users: Users[] = [];

	constructor(
		private usersService: UsersService,
		private route: ActivatedRoute,
		private router: Router,
		private loginservice: LoginService) { }

	public get isIn(): boolean {
		return this.loginservice.isIn;
	}
	login() {
		this.loginEnt = this.usersService
		.login(this.username, this.password)
		.mergeMap(loginResult => this.route.queryParams)
		.map(qp => qp['redirectTo'])
		.subscribe(redirectTo => {
			if (this.loginservice.isIn) {
				this.message = undefined;
				console.log("I'm logged in");
				let url = redirectTo ? [redirectTo] :['/'];
				this.router.navigate(url);
			} else {
				this.message = "There is an error";
			}
		});
	}
	ngOnDestroy() {
		if (this.loginEnt) {
			this.loginEnt.unsubscribe();
		}
	}
}*/