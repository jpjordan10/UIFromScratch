import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SortOptions } from './sortOptions.model';

@Injectable()
export class SortOptionsService {

	constructor(private http: Http) { }

	getList(): Observable<SortOptions[]> {
		return this.http.get('http://localhost:3000/sortOptions').map(res => res.json() as SortOptions[]);
	}
}