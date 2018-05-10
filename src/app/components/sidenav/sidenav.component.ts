import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    filter: number = 0;

    @Output() selectFilterEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectFilter(){
      this.selectFilterEvent.emit(this.filter)
  }



}
