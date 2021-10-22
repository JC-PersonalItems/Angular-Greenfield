import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Example Home');
  }

  ngOnInit(): void {}
}
