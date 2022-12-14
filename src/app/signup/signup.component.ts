import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder,private _http: HttpClient,private _router:Router){}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password: ['']
    })
  }
  signUp(){
    this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login'])
    })
  }

}
