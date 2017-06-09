import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { UsersComponent } from './users.component';
import { UsersService } from './shared/users.service';
//import { Users } from './shared/users.model';

describe('a users component', () => {
	let component: UsersComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: UsersService, useClass: MockUsersService },
				UsersComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UsersComponent], (UsersComponent) => {
		component = UsersComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original users service
class MockUsersService extends UsersService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
