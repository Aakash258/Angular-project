import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { users } from './users';
import { Template } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})

export class RestService {
s="https://reqres.in/api/users?page=1"

  constructor(private http : HttpClient) { }
  url : string=this.s;

  getusers()
  {
    return this.http.get<{data:users[]}>(this.url);
    
    

  }

}
