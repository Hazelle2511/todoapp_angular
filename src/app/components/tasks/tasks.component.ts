import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task).subscribe(() => this.tasks = (this.tasks.filter((todo) => todo.id !== task.id)))
  }

  toggleStatus(task: Task) {
    task.complete = !task.complete;
  this.taskService.updateTaskStatus(task).subscribe()
  }

  addTask(task: Task) {
  this.taskService.addTasks(task).subscribe((task) =>(this.tasks.push(task)))
  }
  
}
