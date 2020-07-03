import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  public data: string[];

  @Output()
  public selected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public selectProduct(id: string): void {
    this.selected.emit(id);
  }

}
