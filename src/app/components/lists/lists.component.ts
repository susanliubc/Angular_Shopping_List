import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';

import { List } from '../../models/List';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getLists().subscribe(lists => (this.lists = lists));
  }

  //Delete list
  deleteList(list: List) {
    //Remove from UI
    this.lists = this.lists.filter(item => item.id !== list.id);
    //Remove from server
    this.listService.deleteList(list).subscribe();
  }

  //Add list
  addList(list: List) {
    this.listService.addList(list).subscribe(list => this.lists.push(list));
  }
}
