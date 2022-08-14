import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {DataserviceService} from "../dataservice.service";
import { Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {

  constructor(private httpser:DataserviceService, private router:Router,
              private route:ActivatedRoute) { }
  yearArray:any=[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  activeyear:any='';
  activelandstatus:any ='false';
  activelaunchstatus:any ='false';
  flightData:any=[];
  queryparam:any='';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      /*this.products.forEach((p: Product) => {
        if (p.id == params.id) {
          this.product = p;
        }*/
      console.log(params);
      if(params.get('yearval')==null){
        this.httpser.fetchAllData().subscribe(data=>{
          this.flightData = data;
          if(this.activeyear!='') {
            this.filterData();
          }
          console.log(this.flightData);

        })

      }else {
        console.log('second flow');
        console.log('second flow status'+params.get('launchstatus'));
        this.activeyear=params.get('yearval');
        this.activelandstatus =params.get('landstatus');
        this.activelaunchstatus =params.get('launchstatus');
        this.httpser.fetchFlightFilterData(this.activeyear,this.activelandstatus,this.activelaunchstatus).subscribe(data=>{
          this.flightData = data;

        })

      }

     // console.log(params.yearval);
      });

    /*this.router.routerState.
    this.router.routerState.queryParams
      .subscribe(params => {
          console.log(params); // { orderby: "price" }

        }
      );*/

  }
  passYearVal(yearval:any){
    console.log(yearval)
    console.log('passyear');
    this.activeyear = yearval;
    this.filterData();

  }
  passLandStatus(statusval:any){
    this.activelandstatus = statusval;
    this.filterData();
  }
  passLaunchStatus(launchstatusval:any){
    this.activelaunchstatus = launchstatusval;
    this.filterData();
  }
  filterData(){
    console.log('filterdata')

    console.log(this.activeyear);
    console.log(this.activelandstatus);
    console.log(this.activelaunchstatus);

    this.httpser.fetchFlightFilterData(this.activeyear,this.activelandstatus,this.activelaunchstatus).subscribe(data=>{
      this.flightData = data;
      this.router.navigate(['/spacedata',this.activeyear,this.activelandstatus,this.activelaunchstatus])


    })
  }



}
