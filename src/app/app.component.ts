declare var $: any;
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public router: Router, public http: HttpClient) {
    this.getBreakingNews();
    this.getCricketScore();
    $(document).ready(function () {
      $(window).resize(function () {
        if ($(window).width() >= 980) {
          // when you hover a toggle show its dropdown menu
          $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show");
          });
          // hide the menu when the mouse leaves the dropdown
          $(".navbar .dropdown-menu").mouseleave(function () {
            $(this).removeClass("show");
          });
          // do something here
        }
      });
    });
  }
  //public APIHost = "http://localhost:8080";
  public APIHost = "http://192.168.1.6:8080";
  public Breakingnews;
  public CricetScore = "";
  public MenuFeeds;
  public SearchString;
  public loadFeedMenu(type: string) {
    this.http.get(this.APIHost + "/feed/Top20FeedsByCatagory/" + type + "/").subscribe(data => {
      this.MenuFeeds = data;
    });
  }
  public getBreakingNews() {
    this.http.get(this.APIHost + "/feedlinks/breakingnews").subscribe(data => {
      var wholetext = "";
      this.Breakingnews = data;
    });
  }
  public getCricketScore() {
    try {
      this.http.get("http://cricapi.com/api/matches?apikey=Yt0hkA4238gZr5BuAbFZVc9mbSk1").subscribe(matchdata => {
        var uniqid = matchdata["matches"][0]["unique_id"];
        this.http.get("http://cricapi.com/api/cricketScore?apikey=Yt0hkA4238gZr5BuAbFZVc9mbSk1&unique_id=" + uniqid).subscribe(score => {
          this.CricetScore = score["description"];
        });
      });
    } catch (error) {

    }

  }
  public scrollToTop() {
    // window.scrollTo(0, 0);
    var body = $("body, html");
    body.animate({ scrollTop: 0 }, 500, function () {
    });
  }

  public searchURL() {
    window.open("http://192.168.1.6:4200/search/" + this.SearchString, "_self");
  }
}
