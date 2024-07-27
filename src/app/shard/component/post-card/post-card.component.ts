import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../model/postInterface';
import { MatDialog } from '@angular/material/dialog';
import { ConforimDeleteComponent } from '../conforim-delete/conforim-delete.component';
import { PostServiceService } from '../../service/post-service.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() arrayPost !: Ipost
  @Output() emitPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Output() emitDeletePost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  constructor(private _matDialog : MatDialog,
              private _postService : PostServiceService,
              
  ) { }

  ngOnInit(): void {
    // console.log(this.arrayPost);
    
  }
  onPostEdit(arrayPost : Ipost){
      this.emitPost.emit(arrayPost)
  }
  onDeletePost(id : any){
    const dialogConf = this._matDialog.open(ConforimDeleteComponent)
    dialogConf.afterClosed()
    .subscribe(getConformation =>{
      if(getConformation){
        this._postService.deletePost(id)
        .subscribe(res =>{
          this.emitDeletePost.emit(id)
        })
      }
    })
  }
}
