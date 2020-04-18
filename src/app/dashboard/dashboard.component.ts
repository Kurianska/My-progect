import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(
    private todoServise: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log('add');
    this.todoServise.addTodo( {
      name: 'test',
      priority: 1,
      authId: '',
      date: new Date()

    });

}
}
