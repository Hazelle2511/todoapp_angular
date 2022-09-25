import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
  
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  complete: boolean = false;
  showAddTask: boolean; 
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Veuillez ajouter une tâche');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      complete: this.complete
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.complete = false;
  }
}
