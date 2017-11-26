import { Component, OnInit } from '@angular/core';
import { FooterService, Message } from './footer.service';
@Component({
  selector: 'lc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  message: Message;
  constructor(private footerService: FooterService) { 
    this.message = footerService.message;
  }

  ngOnInit() {
  }

}
