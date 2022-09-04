import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';
import { EditShowComponent } from '../edit-show/edit-show.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  @Input() data: Movie[] = [];
  @Output() dataChange = new EventEmitter<any>()

  displayedColumns: string[] = ['originalTitle', 'startYear', 'genres', 'action'];

  constructor(public dialog: MatDialog) {}

  editDialog(obj: any) {
    obj.action = 'Update';
    const dialogRef = this.dialog.open(EditShowComponent, {
      width: '250px',
      disableClose: true,
      data:obj,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (obj !== result) {
        this.dataChange.emit(result);
      }
    });
  }
}
