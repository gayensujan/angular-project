import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //now here i used get, post, delete,update.
  //create resturent using post method....
  //json server link.....http://localhost:3000/posts"
  postResturent(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //get resturent data using get method....
getResturent(){
  return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
    return res;
  }))
}
//update resturent using put method....
updateResturent(data:any,id:number){
  return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
  return res;
  }))
}
//delete resturent using delete method...
deleteResturent(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
return res;
  }))
}

}
