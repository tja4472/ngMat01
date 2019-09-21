import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Todo {
  readonly description?: string;
  readonly id: string;
  readonly index: number;
  readonly isComplete: boolean;
  readonly name: string;
}

@Component({
  selector: 'app-list-1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css'],
})
export class List1Component {
  todos: Todo[] = [
    {
      id: '0',
      name: 'Name0',
      description: '00000',
      index: 0,
      isComplete: false,
    },
    {
      id: '1',
      name: 'Name1',
      description:
        '11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111 11111',
      index: 0,
      isComplete: false,
    },
    {
      id: '2',
      name: 'Name2',
      description: '22222',
      index: 0,
      isComplete: false,
    },
    {
      id: '3',
      name: 'Name3',
      description: '33333',
      index: 0,
      isComplete: false,
    },
    {
      id: '4',
      name: 'Name4',
      description: '44444',
      index: 0,
      isComplete: false,
    },
    {
      id: '5',
      name: 'Name5',
      description: '55555',
      index: 0,
      isComplete: false,
    },
    {
      id: '6',
      name: 'Name6',
      description: '66666',
      index: 0,
      isComplete: false,
    },
  ];

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    // force change detection.
    // this.todos = [...this.todos];
  }
}
