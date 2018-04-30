declare var FB: any;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface Feed {
  feedId?: number;
  urlLink?: string;
  headline?: string;
  content?: string;
  contentPreview?: string;
  headLineImage?: string;
  catagory?: string;
  authourName?: string;
  publishingDate?: string;
  published?: boolean;
  views?: number;
  shared?: number;
  likes?: number;
  dislikes?: number;
  comments?: string;
}

@Component({
  selector: 'app-articlereader',
  templateUrl: './articlereader.component.html',
  styleUrls: ['./articlereader.component.css']
})

export class ArticlereaderComponent implements OnInit {

  public APIHost = "http://192.168.1.6:8080";
  public feed: Feed;
  public nextFeed: Feed;
  public tags: string;
  public parameterLink: string;
  public MostRead;
  public NonPolitics;
  public RelatedArticle;
  constructor(public route: ActivatedRoute, public http: HttpClient) {
    this.route.params.subscribe(params => {
      this.parameterLink = params.urlLink;
    });
    this.getArticle();
    this.getMostRead();
    this.getNonPoliticsFeeds();
  }
  public forwardURL(urlLink: string) {
    window.open("http://192.168.1.6:4200/article/" + urlLink, "_self");
  }
  public getArticle() {
    this.http.get(this.APIHost + "/feed/FeedByUrl/" + this.parameterLink + "/").subscribe(data => {
      this.feed = data;
      this.tagsSplit();
      this.getNextfeed(this.feed["feedId"]);
      this.getRelated(this.feed["feedId"]);
    });

  }
  public tagsSplit() {
    this.tags = this.feed["tags"].split(",");
  }

  public shareLinks(type, urlLink) {
    if (type === "fb") {
      window.open("https://www.facebook.com/sharer/sharer.php?u=https://goo.gl/GvWjyt&amp;src=sdkpreparse");
    }
    if (type === "twt") {
      window.open("https://www.twitter.com/share?url=https://goo.gl/GvWjyt");
    }
    if (type === "gp") {
      window.open("https://plus.google.com/share?url=https://goo.gl/GvWjyt");
      
    }
    if (type === "li") {
      window.open("http://www.linkedin.com/shareArticle?mini=true&url=https://goo.gl/GvWjyt");

    }
    // if (type === "fb") {
    //   window.open("https://www.facebook.com/sharer/sharer.php?u=http://localhost:4200/news/" + urlLink + "&amp;src=sdkpreparse");
    // }
    // if (type === "twt") {
    //   window.open("https://www.twitter.com/share?url=http://localhost:4200/news/" + urlLink);
    // }
    // if (type === "gp") {
    //   window.open("https://plus.google.com/share?url=http://localhost:4200/news/" + urlLink);
    // }
    // if (type === "li") {
    //   window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://localhost:4200/news/" + urlLink );

    // }
    // if (type === "wh") {
    //   window.open("whatsapp://send?text=http://localhost:4200/news/" + urlLink );

    // }

    
   
  }
  public getMostRead() {
    this.http.get(this.APIHost + "/feed/mostread/top6").subscribe(data => {
      this.MostRead = data;
    });
  }
  public getRelated(feedId) {
    this.http.get(this.APIHost + "/feed/related/" + feedId).subscribe(data => {
      this.RelatedArticle = data;
    });
  }




  public getNonPoliticsFeeds() {
    this.http.get(this.APIHost + "/feed/nonpolitics").subscribe(data => {
      this.NonPolitics = data;
    });
  }
  public getNextfeed(currentFeedId: number) {
    this.http.get(this.APIHost + "/feed/nextfeed/" + currentFeedId).subscribe(data => {
      this.nextFeed = data;
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
}
