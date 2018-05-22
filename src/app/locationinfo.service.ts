import {Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
//import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map' ; 
//import 'rxjs/add/operator/catch'; 
//import 'rxjs/operator/throw';
//import { filter, catchError } from 'rxjs/operators';
//import { _throw } from 'rxjs/observable/throw';

@Injectable()  // a decorator to tell dependency is possible in cls
export class LocationInfo
{
    private _url:string ='api-data/places-details.json'  //provide data from macheine rather than database
    //error 404

    constructor(private http:Http){}

    getLocation(){
        return this.http.get(this._url) // observable received
        .map((response:Response)=>response.json());
        //.catch(this._errorHandler);
    }
    
   /* _errorHandler(error:Response){
            console.log(error);
            return Observable.throw(error || "Server error");
    }*/
}