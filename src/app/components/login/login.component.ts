import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  
  erroMsg:string = '';

  isloading:boolean = false;

  constructor(private _AuthService: AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  // loginForm:FormGroup = new FormGroup({
  //   email:new FormControl('',[Validators.required, Validators.email]),
  //   password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  // })

  //Week4 v.10(FormBuilder)

  loginForm:FormGroup = this._FormBuilder.group({

    email : [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
  })


  show():void{

    console.log(this.loginForm.value);
    
    if(this.loginForm.valid){

      this.isloading = true;

      this._AuthService.sendLogin(this.loginForm.value).subscribe({

      
        next:(response)=>{
          
          if(response.message === "success"){
            
            localStorage.setItem('token', response.token);

            this._AuthService.decodeToken();
            
            this._Router.navigate(['/home']);

            this.isloading = false;
            
          }
          
        },
        error:(err)=>{
          this.erroMsg = err.error.message ;

          this.isloading = false;
        }
      })
   
    }else{
      this.loginForm.markAllAsTouched()
    }
    
  }

}
