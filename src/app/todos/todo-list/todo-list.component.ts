import { Component, Input } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos!: Todos[];

  isChecked!: boolean;
  onCheck(event: Event) {
    const check = event.target as HTMLInputElement;
    check.parentElement?.nextElementSibling?.classList.toggle(
      'text-decoration-line-through'
    );

    this.isChecked = check.checked;
  }

  onDelete(event: Event) {
    const todo = event.target as HTMLInputElement;
    const parent = todo.parentElement?.parentElement;
    parent?.remove();
  }
}
