import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-articlereader',
  templateUrl: './articlereader.component.html',
  styleUrls: ['./articlereader.component.css']
})
export class ArticlereaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params.urlLink);
    });
   }

  ngOnInit() {
  }

}
