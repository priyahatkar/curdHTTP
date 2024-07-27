import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/postInterface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  public postUrl = `${environment.baseUrl}/posts`; 
  private sendPOstData$ : Subject<Ipost> = new Subject<Ipost>()
  public sendObserverPostData$ = this.sendPOstData$.asObservable()
  private sendPOstUpdateData$ : Subject<Ipost> = new Subject<Ipost>()
  public sendObserverUpdatePost$ = this.sendPOstUpdateData$.asObservable()
  constructor(private _http : HttpClient) { }

  getAllPost(): Observable<Ipost[]>{
    return this._http.get<Ipost[]>(this.postUrl)
  }

  createSinglePost(post : Ipost){
    return this._http.post<Ipost>(this.postUrl,post)
  }
  sendData(std : Ipost){
    this.sendPOstData$.next(std)
  }
  getUpdatePost(std : Ipost): Observable<Ipost>{
    let updateUrl = `${this.postUrl}/${std.id}`
    return this._http.patch<Ipost>(updateUrl, std)
  }
  sendUpdateData(std : Ipost){
    this.sendPOstUpdateData$.next(std)
  }
  deletePost(id : Ipost): Observable<null>{
    let deleteUrl = `${environment.baseUrl}/posts/${id}`
    return this._http.delete<null>(deleteUrl)
  }
}
