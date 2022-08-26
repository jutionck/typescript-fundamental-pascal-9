import { Todo } from './todo.model';
import { Observable, Observer, of, Subject } from 'rxjs';

export class TodoService {
  todos: Todo[] = [];
  todoNotifier: Subject<boolean> = new Subject<boolean>()

  add(todo: Todo): Observable<Todo> {
    return new Observable<Todo>((observer: Observer<Todo>) => {
      setTimeout(() => {
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
        this.todoNotifier.next(true);
        observer.next(todo)
      }, 1000)
    })
  }

  list(): Observable<Todo[]> {
    return of(this.todos);
  }

  notify(): Observable<boolean> {
    return this.todoNotifier.asObservable();
  }
}


