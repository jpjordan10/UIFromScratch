import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SortOptionsComponent } from './sortOptions.component';
import { SortOptionsService } from './shared/sortOptions.service';
//import { SortOptions } from './shared/sortOptions.model';

describe('a sortOptions component', () => {
	let component: SortOptionsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: SortOptionsService, useClass: MockSortOptionsService },
				SortOptionsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SortOptionsComponent], (SortOptionsComponent) => {
		component = SortOptionsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original sortOptions service
class MockSortOptionsService extends SortOptionsService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
