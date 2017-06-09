import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from './users.model';

@Injectable()
export class UsersService {

	constructor(private http: Http) { }

	getList(): Observable<Users[]> {
		return this.http.get('http://localhost:3000/users').map(res => res.json() as Users[]);
	}
}
/*
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from './users.model';
import { LoginService } from "../login";

@Injectable()
export class UsersService {

	constructor(private http: Http, private loginService: LoginService) { }

	userObserver: Observable<any>;
	login(username: string, password: string) {
		let self = this;
		return this.getUser(username, password).map((us) => {
			var foundUser = us.find(u => u.username === username && u.password === password);
			if (foundUser) {
				self.toggleLogState(true);
			}
		});
	}

	getUser(username: string, password: string): Observable<Users[]> {
		this.userObserver = this.http.get('http://localhost:3000/users').map((res: Response) => res.json());
		return this.userObserver;
		//return this.http.get('http://localhost:3000/users').map(res => res.json() as Users[]);
	}

	private toggleLogState(val: boolean) {
		console.log("The value is:", val);
		this.loginService.isIn = val;
	}
}
*/