import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-material',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  mycontrol = new FormControl() 
}
