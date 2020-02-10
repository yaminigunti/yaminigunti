import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {
  lb:number;
  ub:number;
  isJobDone:boolean;

  result:number[];
  errMsg:string;

  constructor(private numSerService:NumberSeriesService) {

    this.lb=0;
    this.ub=0;
    this.isJobDone=true;

  }
  generate() {

    this.result=[];
    this.errMsg=null;
    this.isJobDone=false;

    let ob=this.numSerService.generateSeries(this.lb,this.ub);

    ob.subscribe(
      (num)=>{this.result.push(num); },
      (errMsg) => {this.errMsg=errMsg; this.isJobDone=true; },
      ()=>{this.isJobDone=true;}

    );
  }

  
}
