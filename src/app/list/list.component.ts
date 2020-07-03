import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public data: string[];

  @Output()
  public remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public removeFromList(position: number) {
    this.remove.emit(position);
  }

}
