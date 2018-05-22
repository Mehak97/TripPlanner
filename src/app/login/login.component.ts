import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  UserForm :FormGroup;
  
  constructor(private formdetails:FormBuilder){}

  ngOnInit() {

    this.UserForm=this.formdetails.group({
      name:['Enter your name',[Validators.required]],
      password:['',Validators.required,Validators.minLength(5)]
    })
  }

  onSubmit()
  {
    console.log("register ho gya");
    // redirect to home page
    //window.open('localhost:4200');
  }
  
}
