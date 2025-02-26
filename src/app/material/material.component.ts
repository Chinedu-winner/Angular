import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar'
import { SnackbarComponent } from '../snackbar/snackbar.component';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-material',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, MatDialogModule, MatBadgeModule ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  mycontrol = new FormControl('')
  
  dialog = inject(MatDialog)

  snackbar = inject(MatSnackBar)

  openDialog(enterAnimationDuration:string, exitAnimationDuration: string, message:string){
    this.dialog.open(DialogComponent,{
      width:'400px',
      enterAnimationDuration,
      exitAnimationDuration, 
      data:{
        dialog_message: message
      }
    })
  }

  openSnackbar(){
    this.snackbar.openFromComponent(SnackbarComponent,{
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'top', 
    })
  }

}
