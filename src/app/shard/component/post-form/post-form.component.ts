import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostServiceService } from '../../service/post-service.service';
import { Ipost } from '../../model/postInterface';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm !: FormGroup
  public updateMode : boolean = false
  public postId !: Ipost
  constructor(@Inject(MAT_DIALOG_DATA)getPostId : Ipost,
    private _postService : PostServiceService,
    private _matDialog : MatDialogRef<PostFormComponent>,
    private _snackbar : SnackbarService        
  ) { 
    this.createPostForm()
    this.postId = getPostId
    if(getPostId){
      this.postForm.patchValue(getPostId)
      this.updateMode = true
      this._postService.getUpdatePost(getPostId)
    }
  }

  ngOnInit(): void {
  }
  createPostForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      body : new FormControl(null, [Validators.required]),
      userId : new FormControl(null, [Validators.required]),
    })
  }
  onPostInfo(){
    if(this.postForm.valid){
      let postData = this.postForm.value
      this._postService.createSinglePost(postData)
        .subscribe(res =>{
          this._postService.sendData(res)
          this._matDialog.close()
        })
        this.postForm.reset()
    }
  }
  onPOstUpdate(){
    let updateId : Ipost = {...this.postForm.value, id : this.postId.id}
    this._postService.getUpdatePost(updateId)
      .subscribe((res)=>{
        this._postService.sendUpdateData(updateId)
        this._matDialog.close()
        this._snackbar.openSnackBar(`This post is successfully Updated ${res.title}`, 'Close')
      })
  }
  onPostCancel(){
    this._matDialog.close()
  }
}
