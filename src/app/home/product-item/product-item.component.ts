import { Component, OnInit, Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Output() eventDetail=new EventEmitter();
  show:boolean=false;
  statusDes:string='Show Des'
  constructor() { }
  HideShowDes(){
    this.show=!this.show;
    if(this.show) this.statusDes='Hide Des';
    else this.statusDes='Show Des';
  }
  ShowDetail(){
    this.eventDetail.emit(this.product);
  }
  ngOnInit() {
  }

}
