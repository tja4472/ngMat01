import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface Todo {
  readonly description?: string;
  readonly id: string;
  readonly index: number;
  readonly isComplete: boolean;
  readonly name: string;
}

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.css'],
})
export class MatListComponent {
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
      description: '11111 11111 11111',
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
  ];

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(
      this.todos,
      event.previousIndex,
      event.currentIndex
    );
  }
}
