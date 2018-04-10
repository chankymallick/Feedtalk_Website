declare var $: any;
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public http: HttpClient) {   
    this.getTopStories();
    this.getAllStories();
    this.getMostRead();
    this.getLatestNewsLinks();
 
  }
  ngOnInit() {
    $(".mostread").hover(function () {
      $(this).toggleClass("active");
    });

  }
  public APIHost = "http://192.168.1.6:8080"
  public AllStories;
  public TopStories;
  public LatestLinks;
  public MostRead;

  public getTopStories() {
    this.http.get(this.APIHost + "/feed/mostrecent/top6").subscribe(data => {
      this.TopStories = data;
    });
  }
  public getAllStories() {
    this.http.get(this.APIHost + "/feed/mostrecent").subscribe(data => {
      this.AllStories = data;
    });
  }
  public getLatestNewsLinks() {
    this.http.get(this.APIHost + "/feedlinks/TOPSTORY").subscribe(data => {
      this.LatestLinks = data;
    });
  }
  public getMostRead() {
    this.http.get(this.APIHost + "/feed/mostread/top6").subscribe(data => {
      this.MostRead = data;
    });
  }
  public scrollToTop() {
    window.scrollTo(0, 0);
  }
  public getTimeInterval(time1: number) {
    try {
      var date_now = new Date(time1).getTime();
      var date_future = new Date().getTime();
      var delta = Math.abs(date_future - date_now) / 1000;
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      var seconds = delta % 60;

      if (days != 0) {
        return days + " Days Ago";
      }
      if (hours != 0) {
        return hours + " hours Ago";
      }
      if (minutes != 0) {
        return minutes + " minutes Ago";
      }
      if (minutes == 0) {
        return "just now";
      }
    }
    catch (err) {
      return null;
    }
  }
}
