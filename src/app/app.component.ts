import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { users } from './users';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import {Rest2Service} from './rest2.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  // title = 'angular-assignment';

  // constructor(private rs:RestService){}
  
  // columns=["Id","Email","First_name","Last_name","Avatar"];

  // index=["user_id","email","first_name","last_name","avatar"];

  // //  index=["id,","email","firstname","lastname","avatar"];
  // firstName:any;
  // users : users[] = [];

  // ngOnInit(): void {
  //   this.api_Data()
  // }
  // api_Data()
  // {
  // this.rs.getusers().subscribe
  // (
  //   (Response)=>
  //   {
  //     this.users=Response.data;
  //   },
  //   (error)=>
  //   {
  //     console.log("error : "+error);  
  //   }
  // );
  // }
  

  // search()
  // {
  //   if(this.firstName=="")
  //   {
  //     this.api_Data()
  //   }
  //   else{
  //     this.users=this.users.filter(Response=> {
  //       return Response.first_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) || Response.last_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
         
  //     })
  //   }
  // }
  // alert()
  // {
  //   let flag=1
  //   // s="https://reqres.in/api/users?page=2";
  // }
  public sample=[];
    ELEMENT_DATA: users[] = [];
    displayedColumns:string[]=['id','email','first_name','last_name','avatar'];
    dataSource=new MatTableDataSource<users>(this.ELEMENT_DATA);

     constructor(private _sampleService : RestService,private _secondSampleService : Rest2Service){ 
  } 
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator | undefined ;



  ngOnInit(){
   
      //this.getData();
      //this.getData1();
      this.dataSource.paginator= this.paginator;
    this.getData3();
  
  }
  getData2(){
    this._sampleService.getusers()
        .subscribe((Response)=>
        {
          if(Response){
            // hideloader();
          }
          //this.sample=Response.data;
          this.dataSource.data=Response.data as users[];
        },
        );
        function hideloader(){ 
         // document.getElementById('loading').style.display = 'none';
        } 
  }
  getData3(){
        forkJoin(this._sampleService.getusers(),this._secondSampleService.getusers1())
      .subscribe(([Response1,Response2])=>{
          console.log(Response1,Response2);
          if(Response1 && Response2){
            //hideloader();
          }

          // this.sample=Response1.data;
          // this.sample=this.sample.concat(Response2.data);

          this.dataSource.data=Response1.data as users[];
          this.dataSource.data=this.dataSource.data.concat(Response2.data as users[]);
      })

      function hideloader(){ 
        //document.getElementById('loading').style.display = 'none';
      } 
  }
  applyFilter(filterValue: String) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
