import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  showBar(msg: string){
    this.snackbar.open(msg);
  }
}
