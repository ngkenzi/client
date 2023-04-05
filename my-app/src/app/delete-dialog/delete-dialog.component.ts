import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from '../service/service';
import { Task } from '../task';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})

export class DeleteDialogComponent {

  constructor(
    private taskService: Service,
    @Inject(MAT_DIALOG_DATA) public task: Task,
    ) {}

    onDelete(task : Task): void {
      console.log(task);
      
      this.taskService.deleteTask(task.id).subscribe();
      console.log('Task has been updated');
    }
}
