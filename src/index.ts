import { TodoService } from './todo/todo.service';
import { combineLatest, map } from 'rxjs';
import { Todo } from './todo/todo.model';

const todoService: TodoService = new TodoService();
combineLatest([
  todoService.add({name: 'Madang', isDone: false}),
  todoService.add({name: 'Minum', isDone: true}),
  todoService.add({name: 'Turu', isDone: false}),
  todoService.add({name: 'Ngoding', isDone: false}),
]).subscribe((todos: Todo[]) => {
  console.log(`${todos.length} kegiatan sudah ditambahkan`);
});

todoService.notify().subscribe((isUpdate: boolean) => {
  if (isUpdate) {
    todoService.list().pipe(
        map((list: Todo[]) => {
          return list.map((todo: Todo) => {
            return `Todo ${todo.name} ${(todo.isDone ? 'sudah selesai' : 'belum selesai')}`;
          })
        })
    ).subscribe((todos) => {
      console.log(todos);
    });
  }
})


