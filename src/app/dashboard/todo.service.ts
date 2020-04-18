import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Todo } from './todo.model';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
 

  constructor(
    private readonly afs: AngularFirestore,
    private authService: AuthService
  ) { }

  addTodo(todo) {
    const id = this.afs.createId();
    todo.date = new Date();
    todo.authorId = this.authService.userDetail.uid;
    todo.complete = false;
    console.log(todo, id);
    return this.afs.collection<Todo>('todos').doc(id).set(todo);
  }
}

