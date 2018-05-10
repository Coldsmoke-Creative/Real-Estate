import { Component, NgModule, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapserverService } from '../../services/mapserver/mapserver.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    filter = [];
    maxNum = '';
    minNum = '';
    maxDate = '';
    minDate = '';
    @Input('filters') filters;
    @Output() applyFilterEvent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    remove(filter: any): void {
        let index = this.filters.indexOf(filter);

        if(this.filters.length > 1){
            this.applyFilterEvent.emit('remove,'+ filter.name);
        }else{
            this.applyFilterEvent.emit('');
        }

        if (index >= 0) {
        this.filters.splice(index, 1);
        }
    }

    setMaxNum(value){
        this.maxNum=value
    }

    setMinNum(value){
        this.minNum=value
    }

    applyFilter(operation,filter,value){
        this.filter=[operation,filter,value]
        this.applyFilterEvent.emit(this.filter);
        console.log(this.filter)
    }

    applyFilterMinNum(operation,filter,value){
        this.filter=[operation,filter,value,this.maxNum]
        this.applyFilterEvent.emit(this.filter);
        console.log(this.filter)
    }

    applyFilterMaxNum(operation,filter,value){
        this.filter=[operation,filter,this.minNum,value]
        this.applyFilterEvent.emit(this.filter);
        console.log(this.filter)
    }

    applyFilterMinDate(operation,filter,value){
        this.minDate=value
        this.filter=[operation,filter,this.minDate,this.maxDate]
        this.applyFilterEvent.emit(this.filter);
        console.log(this.filter)
    }

    applyFilterMaxDate(operation,filter,value){
        this.maxDate=value
        this.filter=[operation,filter,this.minDate,this.maxDate]
        this.applyFilterEvent.emit(this.filter);
        console.log(this.filter)
    }


}
