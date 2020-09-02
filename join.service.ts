import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Item } from './item';



@Injectable({
  providedIn: 'root'
})
export class JoinService {
public item:Item
public flag:number
public name:string
public islogin:any
public pname:string
public price:string
public details:string;
  constructor(private http: HttpClient, private router:Router) { this.flag=0;
    this.islogin=false;}

  registerUser(user){
    this.http.post('http://localhost:3000/signup',user).subscribe(res => {
      this.router.navigate(['/login'])
      console.log(res);
      
    })
  }
  loginuser(email:string,password:string){
    this.http.post('http://localhost:3000/login',{email,password}).subscribe(res => {
      console.log(res);
      if(res && res.user)
      {
        localStorage.setItem("name",res.user.name);
        this.islogin=true
        this.name=res.user.name
        this.router.navigate(['/home'])
      }
      //else alert("Incorrect Password!")
      console.log(res);
  })
}
   itemdetail(productname:string,price:string,details:string,name:string,contact:string){  
    this.http.post('http://localhost:3000/items',{productname,price,details,name,contact}).subscribe(res => {
      //console.log(res);
     // alert ("helloS")
      if(res){
      localStorage.setItem('id',res.result._id);
       ////alert(localStorage.getItem('id'));
       //console.log(res.result._id);
        this.router.navigate(['/it'])
      }
      
    })
  }
  redirectpage(_id:string){
   //alert(_id);
    this.http.post('http://localhost:3000/item',{_id}).subscribe(res => {
    
    if(res && res.item){
     
      console.log(res.item)
       this.item=res.item
       this.flag=1;
        return this.item;
      }
     else
     return "finish"
    })
    return this.item
  }
}
