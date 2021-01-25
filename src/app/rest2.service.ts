import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { users } from './users';
import { Template } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})

export class Rest2Service {
s="https://reqres.in/api/users?page=2"

  constructor(private http : HttpClient) { }
  url : string=this.s;

  getusers1()
  {
    return this.http.get<{data:users[]}>(this.url);
    
    

  }

}
