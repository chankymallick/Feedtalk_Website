declare var $: any;
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-searchfeeds',
  templateUrl: './searchfeeds.component.html',
  styleUrls: ['./searchfeeds.component.css']
})
export class SearchfeedsComponent {


  public APIHost = "http://192.168.1.6:8080";
  public SearchFeeds;
  public searchquery = "";
  public SearchCount;
  constructor(public route: ActivatedRoute, public http: HttpClient) {   
    this.route.params.subscribe(params => {
      this.searchquery = params.query;
    });
    this.searchFeed();
  }

  public searchFeed() {  
      this.http.get(this.APIHost + "/feed/search/" + this.searchquery + "/").subscribe(data => {
      this.SearchFeeds = data;
      var count = Object.keys(this.SearchFeeds).length ;
      if(count > 0){
        this.SearchCount = count; 
      }
      
    });

  }
  public forwardURL(urlLink: string) {
    window.open("http://192.168.1.6:4200/article/" + urlLink, "_self");
  }


}
