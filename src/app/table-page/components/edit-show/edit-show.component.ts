import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.scss'],
})
export class EditShowComponent {
  constructor(
    public dialogRef: MatDialogRef<EditShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie
  ) {}

}
