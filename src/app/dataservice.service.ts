import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclient: HttpClient) { }
  //fetch overall flights data
   fetchAllData():Observable<any>{
    return  this.httpclient.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
  }
  //fetch flight data based on year ,launch and landsuccess
  fetchFlightFilterData(year:any,landstatus:any,launchstatus:any) {
    return  this.httpclient.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year+
      "&launch_succcess="+launchstatus+"&land_status="+landstatus);

  }
}
