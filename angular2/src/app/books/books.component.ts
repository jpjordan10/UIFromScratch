import { Component, OnInit } from '@angular/core';

import { Books } from './shared/books.model';
import { BooksService } from './shared/books.service';

@Component({
	selector: 'books',
	templateUrl: 'books.component.html',
	styleUrls: ['./books.component.scss'],
	providers: [BooksService]
})

export class BooksComponent implements OnInit {
	books: Books[] = [];
	filters: any = { pageSize: "100", pageNumber: 1, sortBy: null, searchText: '' };

	constructor(private booksService: BooksService) { }

	onSearch(): void {
		console.log("onSearch", this.filters.searchText);
		console.log("sortOption", this.filters.sortBy);
		this.UpdateList();
	}
	sortByChanged(sortByValue : string):void{
		console.log("sortByChanged", sortByValue);
		this.filters.sortBy = sortByValue;
		this.UpdateList();
	}

	ngOnInit() {
		this.UpdateList();
	}
	UpdateList() {
		this.booksService.getList(this.filters).subscribe((res) => {
			this.books = res;
		});
	}
}