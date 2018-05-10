import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MapserverService } from '../../services/mapserver/mapserver.service';
import { fields } from '../../../fields';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.css'],
  providers: [ MapserverService ]
})
export class ScrapComponent implements OnInit {

  page: number = 1;
  perPage : number = 20;
  total : number;
  sortBy: String= 'OBJECTID';
  filter= [];
  criteria: Boolean= true;
  places=[];
  filters=[];
  fields=fields;
  loading: Boolean = false;

  constructor(private placesService: MapserverService) { }

  ngOnInit() {
    this.getData(this.perPage,this.page,this.sortBy,this.criteria,this.filter);
  }

  paginate(event){
    this.page=event.pageIndex+1;
    this.perPage=event.pageSize;
    this.getData(this.perPage,this.page,this.sortBy,this.criteria,this.filter);
  }

  sort(value){
    if(value==this.sortBy){
      this.criteria=!this.criteria
      this.getData(this.perPage,this.page,this.sortBy,this.criteria,this.filter);
    }else{
      this.criteria=true;
      this.getData(this.perPage,this.page,value,this.criteria,this.filter);
      this.sortBy=value;
    }
  }

  selectFilter($event){
    this.filter=$event;
    this.getData(this.perPage,this.page,this.sortBy,this.criteria,this.filter);
  }

  getData(perPage,page,sortBy,criteria,filter){
    this.loading = true;
    this.placesService.get(perPage,page,sortBy,criteria,filter)
     .subscribe((res) => {
       this.total=res.count;
       this.places=res.addresses;
       this.loading = false;
     });
  }

  search(string){
    this.placesService.search(string)
     .subscribe((places) => {
       this.places=places;
     });
  }

  add(filter) {
    let index = this.filters.indexOf(filter);

    if (index < 0) {
        this.filters.push(filter);
    }
  }

}
