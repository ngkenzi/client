import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { environment } from "../environment";
import { Task } from "../task";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class Service {
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };

    constructor (private http: HttpClient) {}

    getAllTasks() : Observable <any> {
        return this.http.get<any>(environment.getApiUrl);
        //return this.http.get<TodoElement[]>(environment.apiUrl).pipe(tap(data => console.log(' All: ', JSON.stringify(data))),catchError(this.handleError));
    }

    createTask(task : Task): Observable <any> {
        return this.http.post<any>(environment.postApiUrl, task, this.httpOptions);
    }

    editTask(task : Task): Observable <any> {
        return this.http.put<any>(environment.putApiUrl + "/" + task.id, task, this.httpOptions);
    }

    deleteTask(taskid : number): Observable<any> {
        return this.http.delete<any>(environment.deleteApiUrl + "/" + taskid, this.httpOptions);
    }

    // private handleError(err: HttpErrorResponse) {
    //     let errorMessage ='';
    //     if (err.error instanceof ErrorEvent) {
    //         errorMessage = `An error occurred': ${err.error.message}`;
    //     } else {
    //         errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    //     }
    //     console.error(errorMessage);
    //     return throwError(() => errorMessage);
    // }  
}