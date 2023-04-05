import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Service } from '../service/service';
import { Task } from '../task';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent {
    taskForm = this.formBuilder.group({
    title: '',
    description: '',
    category: '',
    dueDate: '',
  })

  constructor(
    private formBuilder : FormBuilder,
    private taskService: Service,
    ) {}

    onSubmit(): void {
      let dialogRef = this.taskService.createTask(this.taskForm.value as Task).subscribe();
      console.log('Task has been added',
      this.taskForm.value);
      this.taskForm.reset({
    });
  }


}
