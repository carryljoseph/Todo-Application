import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  constructor(private service:TodoDataService,
    private router:Router) { }

  message: string

   todos : Todo[]
  //  = [
  //    new Todo(1,'Book Ticket',false,new Date()),
  //    new Todo(2,'Pay Emi',false,new Date()),
  //    new Todo(3,'Get Grocery',false,new Date())
  //  ]

  // todos = [
  // {id:'1',description:'Book Ticet'},
  // {id:'2',description:'Pay Emi'},
  // {id:'3',description:'Get Grocery'}
  // ]

  // todo = {
  //   id : '1',
  //   description : 'Book Ticket'
  // }

  ngOnInit() {
      this.refreshTodos()
  }

  refreshTodos(){
    this.service.retrieveAlltodos('caroljoseph').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    ) 
  }

  deleteTodos(id){
      this.service.deleteTodo(id,'caroljoseph').subscribe(
        response => {
        console.log(response)
        this.refreshTodos()
        this.message = `Delete of Todo ${id} Successful`
        }
      )
  }

  updateTodos(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }


}
