import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-conforim-delete',
  templateUrl: './conforim-delete.component.html',
  styleUrls: ['./conforim-delete.component.scss']
})
export class ConforimDeleteComponent implements OnInit {

  constructor(private _matDialog : MatDialogRef<ConforimDeleteComponent>) { }

  ngOnInit(): void {
  }
  oncancel(){
    this._matDialog.close(false)
  }
  onConfirmDelete(){
    this._matDialog.close(true)
  }
}
