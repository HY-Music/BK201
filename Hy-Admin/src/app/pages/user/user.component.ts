import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private http : HttpClient) {}
  isBanned : boolean = true;
  artistsList : any ;

  ban=(id : any)=>{
    this.http.post("http://localhost:3000/admin/ban/"+id,{}).subscribe((res:any)=>{
      this.artistsList=res
      console.log(this.artistsList);
      
    })
  }
  
  activate=(id : any)=>{
    this.http.post("http://localhost:3000/admin/activate/"+id,{}).subscribe((res:any)=>{
      this.artistsList=res
      console.log(this.artistsList);
      
    })
    
  }
  getusersList=(id : any)=>{
   
  }
  ngOnInit() {
    this.http.get("http://localhost:3000/admin/usersList").subscribe((res:any)=>{
      this.artistsList=res
      console.log(this.artistsList);
      
    })
  }
}
