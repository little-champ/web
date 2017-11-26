import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuItemType } from './navigation.model';

@Component({
  selector: 'lc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [
    {
      title: 'Basic Mathematics', type: MenuItemType.section, children: [
        { title: 'Number Addition', type: MenuItemType.item, url: '#' },
        { title: 'Number Subtraction', type: MenuItemType.item, url: '#' },
        { title: 'Number Multiplication', type: MenuItemType.item, url: '#', selected: true },
        { title: 'Number Division', type: MenuItemType.item, url: '#' }],
    },{
      title: 'Coding', type: MenuItemType.section, children: [
        { title: 'Turtle', type: MenuItemType.item, url: '#' },
        { title: 'Scratch', type: MenuItemType.item, url: '#' }]
    }
  ];
  selectedItem: MenuItem = this.items[0];
  constructor() { }

  ngOnInit() {
  }

  selectItem(item) {
    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }
    item.selected = true;
    this.selectedItem = item;
  }

}
