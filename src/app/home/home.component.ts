import { Component, OnInit } from '@angular/core';
import { FooterService, MessageType, Message } from '../footer';

@Component({
  selector: 'lc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private footerService: FooterService) {
    this.footerService.message = {
      type: MessageType.Information,
      text: 'If you do not see menu then click on hamburger icon on top left'
    };
  }

  ngOnInit() {
  }

}
