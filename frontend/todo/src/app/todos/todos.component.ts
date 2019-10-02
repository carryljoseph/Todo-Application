import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  id:number
  todo:Todo

  constructor(private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id,'',false,new Date())

    if(this.id != -1){
      this.service.retrieveTodo(this.id,'caroljoseph').subscribe(
        data => this.todo = data

      )
    }
  }

  saveTodo(){

    if(this.id != -1){
      this.service.updateTodo(this.id,'caroljoseph',this.todo).subscribe(
        data => {
            this.router.navigate(['todos'])
        }
      )
    }else{
      this.service.createTodo('caroljoseph',this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }

 

}
