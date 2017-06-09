import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SortOptions } from './shared/sortOptions.model';
import { SortOptionsService } from './shared/sortOptions.service';

@Component({
	selector: 'sortOptions',
	templateUrl: 'sortOptions.component.html',
	providers: [SortOptionsService]
})

export class SortOptionsComponent implements OnInit {
	sortOptions: SortOptions[] = [];

	constructor(private sortOptionsService: SortOptionsService) { }

	 @Input()
  		selected: string ="";		  
	
	@Output() selectedValueEvent : EventEmitter<string> = new EventEmitter<string>();

	ngOnInit() {
		this.sortOptionsService.getList().subscribe((res) => {
			this.sortOptions = res;
		});
	}

	onChange(){
		//console.log("this.selected", this.selected);
		  this.selectedValueEvent.emit(this.selected);
	}

}