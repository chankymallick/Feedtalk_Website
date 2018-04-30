import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-linksreader',
  templateUrl: './linksreader.component.html',
  styleUrls: ['./linksreader.component.css']
})
export class LinksreaderComponent implements OnInit {

  public parameterLink: string;
  public FeedLink;
  public APIHost = "http://192.168.1.6:8080";
  public MostRead;
  public NonPolitics;
  public LatestLinks;
  constructor(public route: ActivatedRoute, public http: HttpClient) {
    this.route.params.subscribe(params => {
      this.parameterLink = params.urlLink;
    });
    this.getFeedlink();
    this.getMostRead();
    this.getNonPoliticsFeeds();
    this.getLatestNewsLinks("TOPSTORY");
  }


  public newsLinks(type: string) {
    this.getLatestNewsLinks(type)
  }

  public getLatestNewsLinks(type: string) {
    this.http.get(this.APIHost + "/feedlinks/" + type).subscribe(data => {
      this.LatestLinks = data;
    });
  }
  public forwardlLink(urlLink: string) {
    window.open("http://192.168.1.6:4200/newslinks/" + urlLink, "_self");
  }
  public forwardURL(urlLink: string) {
    window.open("http://192.168.1.6:4200/article/" + urlLink, "_self");
  }
  public forwardSource(sourceLink: string) {
    window.open(sourceLink, '_blank');

  }
  public getFeedlink() {
    this.http.get(this.APIHost + "/feedlinks/id/" + this.parameterLink + "/").subscribe(data => {
      this.FeedLink = data;
    });
  }
  public getMostRead() {
    this.http.get(this.APIHost + "/feed/mostread/top6").subscribe(data => {
      this.MostRead = data;
    });
  }
  public getNonPoliticsFeeds() {
    this.http.get(this.APIHost + "/feed/nonpolitics").subscribe(data => {
      this.NonPolitics = data;
    });
  }
  ngOnInit() {
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

  public shareLinks(type, urlLink) {
   
    if (type === "fb") {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + urlLink + "&amp;src=sdkpreparse");
    }
    if (type === "twt") {
      window.open("https://www.twitter.com/share?url=" + urlLink);
    }
    if (type === "gp") {
      window.open("https://plus.google.com/share?url=" + urlLink);
    }
    if (type === "li") {
      window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + urlLink );

    }
    if (type === "wh") {
      window.open("whatsapp://send?text=" + urlLink );

    }

    
   
  }
}
