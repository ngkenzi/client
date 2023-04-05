import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { Service } from '../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    private matDialog: MatDialog,
    private taskService: Service,
    private router: Router
  ) { }

  openDialog() {
    this.matDialog.open(AddTaskDialogComponent, {
      width: '350px',
    }).afterClosed().subscribe(() =>
      this.taskService.getAllTasks().subscribe())

  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("login")
  }

}
