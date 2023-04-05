import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from '../service/service';
import { Task } from '../task';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-btn-dialog',
  templateUrl: './edit-btn-dialog.component.html',
  styleUrls: ['./edit-btn-dialog.component.css']
})
export class EditBtnDialogComponent implements OnInit {

  editForm = this.formBuilder.group({
    title: '',
    description: '',
    category: '',
    dueDate: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private taskService: Service,
    @Inject(MAT_DIALOG_DATA) public task: Task,
  ) {

  }

  ngOnInit(): void {

    let dueDate = new Date(this.task.dueDate);
    let dueDateStr = dueDate.toISOString().slice(0, 10);

    this.editForm = this.formBuilder.group({
      title: this.task.title,
      description: this.task.description,
      category: this.task.category,
      dueDate: dueDateStr,
    })
  }

  onSubmit(): void {
    this.taskService.editTask({ ...this.task, ...this.editForm.value } as Task).subscribe({    })

    
    console.log('Task has been updated',
      this.editForm.value);
    this.editForm.reset({
    });
  }
}
