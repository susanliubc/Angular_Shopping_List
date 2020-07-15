import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from '../../services/list.service';

import { List } from '../../models/List';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Output() deleteList: EventEmitter<List> = new EventEmitter();

  constructor(private listService: ListService) {}

  ngOnInit() {}

  //Set dynamic classes
  setClass() {
    let classes = {
      list: true,
      'is-complete': this.list.completed
    };

    return classes;
  }

  //On toggle
  onToggle(list) {
    //Toggle in UI
    list.completed = !list.completed;
    console.log('list completed', list.completed);
    //Toggle in server
    this.listService.toggleCompleted(list).subscribe(item => console.log(item));
  }

  onDelete(list) {
    if (list.completed) {
      this.deleteList.emit(list);
    }
  }
}
