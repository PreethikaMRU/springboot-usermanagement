import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {
  id:any;
  myData={
    name:"",
    username:"",
    email:""
  }
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:8080/User/${this.id}`).subscribe(data => {this.myData.name = data.name; this.myData.username = data.username; this.myData.email = data.email; });
    
  }

}
