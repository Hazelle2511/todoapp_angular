import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private serverUrl = 'http://localhost:3001/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
return this.http.get<Task[]>(this.serverUrl)
  }


 
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.serverUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskStatus(task: Task): Observable<Task> {
    const url = `${this.serverUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTasks(task: Task): Observable<Task> {
  return this.http.post<Task>(this.serverUrl, task, httpOptions)
}
}
