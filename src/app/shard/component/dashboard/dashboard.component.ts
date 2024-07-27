import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';
import { Ipost } from '../../model/postInterface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public postArray !: Ipost[]
  constructor(private _postService : PostServiceService,
              private _matDialog : MatDialog,
              private _snackbar : SnackbarService
  ) { }
  ngOnInit(): void {
    this._postService.getAllPost()
      .subscribe((res )=>{
        this.postArray = res
        console.log(res);
      })
    
    this._postService.sendObserverPostData$
    .subscribe((res) =>{
      this.postArray.unshift(res)
      this._snackbar.openSnackBar(`This post is successfully added ${res.title}`, 'Close')
    })

    this._postService.sendObserverUpdatePost$
      .subscribe((res) =>{
        this.postArray.forEach((str) =>{
          if(str.id === res.id){
            str.userId = res.userId,
            str.title = res.title,
            str.body = res.body
          }
        })
      })
  }
  onPostAdd(){
    const dialogConf = new MatDialogConfig()
    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;
    const dialogRef = this._matDialog.open(PostFormComponent, dialogConf)
  }
  onEditEmitPost(post : Ipost){
    const dialogConf = new MatDialogConfig()
    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;
    dialogConf.data = post;
    const dialogRef = this._matDialog.open(PostFormComponent, dialogConf)
  }
  onDeletePostData(id : any){
    let getIndex = this.postArray.findIndex(post => post.id === id)
    this.postArray.splice(getIndex, 1)
  }
}
