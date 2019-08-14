import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  detail:object={name:'',img:'',des:'',price:''};
  DataDetail(data){
    this.detail=data;
  }
  ngOnInit() {
  }

}
