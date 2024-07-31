import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  myData={
    name:"",
    username:"",
    email:""
  }

  constructor(private http: HttpClient){}
    createPost(){
      this.http.post("http://localhost:8080/User",this.myData).subscribe(
        response => {
          alert('Post created successfully');
        },
        error=>{
          console.error('Error creating post:',error)
        }
        
      );
      this.myData.email="";
      this.myData.name="";
      this.myData.username="";
    }
}
