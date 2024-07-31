import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(HttpClient);
  users:any;

  constructor(){
    this.http.get("http://localhost:8080/Users").subscribe(data => {this.users = data;});
  }


  deleteUser(id:any){
    this.http.delete(`http://localhost:8080/User/${id}`).subscribe(
      response => {
        alert('Deleted successfully');
      },
      error=>{
        console.error('Error deleting post:',error)
      }
      
    );
  }

}
