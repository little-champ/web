import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  menuButtonClick() {
    this.menuClick.emit();
  }

}
