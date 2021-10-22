import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Example Tab');
  }

  ngOnInit(): void {}
}
