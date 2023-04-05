import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditBtnDialogComponent } from '../edit-btn-dialog/edit-btn-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Service } from '../service/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private matDialog: MatDialog,
    private service: Service,

  ) { }

  openEditDialog(task : Task) {
    const dialogRef = this.matDialog.open(EditBtnDialogComponent, {
      width: '350px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(' The dialog was closed');
    })
  }

  openDeleteDialog(task : Task) {
    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      width: '350px',
      data: task
    });

    dialogRef.afterClosed().subscribe(() => this.loadTask())
  }

  ngOnInit(): void {
    this.loadTask();
    this.matDialog.afterAllClosed.subscribe(() => this.loadTask());
  }

  loadTask(): void {
    this.service.getAllTasks().subscribe({
      next: response => {
        console.log(response);
        
        this.tasks = (response.data.tasks as Task[]).filter(task => task.isDeleted == false)
      }
    });
  }
}
