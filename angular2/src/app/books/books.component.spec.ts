import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { BooksComponent } from './books.component';
import { BooksService } from './shared/books.service';
//import { Books } from './shared/books.model';

describe('a books component', () => {
	let component: BooksComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: BooksService, useClass: MockBooksService },
				BooksComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BooksComponent], (BooksComponent) => {
		component = BooksComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original books service
class MockBooksService extends BooksService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
