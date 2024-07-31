import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {
  
  myData={
    name:"",
    username:"",
    email:""
  }
  id:any;
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:8080/User/${this.id}`).subscribe(data => {this.myData.name = data.name; this.myData.username = data.username; this.myData.email = data.email; });
    
  }
  
  createPut(){
    this.http.put(`http://localhost:8080/User/${this.id}`,this.myData).subscribe(
      response => {
        alert('Edited successfully');
      },
      error=>{
        console.error('Error creating post:',error)
      }
      
    );
  }
}
