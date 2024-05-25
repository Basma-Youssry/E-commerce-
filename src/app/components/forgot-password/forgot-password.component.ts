import { ForgotpasswordService } from './../../shared/services/forgotpassword.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPAsswordComponent{

  constructor(private _FormBuilder: FormBuilder, 
              private _ForgotpasswordService: ForgotpasswordService,
              private _Router:Router){}


  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;

  userMsg:string = '';
  email:string = '';

  forgotForm:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]]
  })

  resetCodeForm:FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required]]
  })

  resetNewPassForm:FormGroup = this._FormBuilder.group({
    newPassword: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
  })


  forgotPassword(): void{
    
   let userEmail = this.forgotForm.value;

   this.email = userEmail.email;

   this._ForgotpasswordService.forgotPass(userEmail).subscribe({

      next:(response) => {
 
      this.userMsg =  response.message;
      
        this.step1 = false;
        this.step2 = true;
      },
      error:(err) => {
        this.userMsg =  err.error.message;
      }
   })
    
  }

  resetCode(): void {

    let resCode = this.resetCodeForm.value;

    this._ForgotpasswordService.resetCodee(resCode).subscribe({
      next:(response)=>{
        this.userMsg =  response.status;
        this.step2 = false;
        this.step3 = true;
        console.log(response);
        
      },
      error:(err) => {
        this.userMsg =  err.error.message;
      }
    })
  }

  resetnewPass(): void {

    let resetPass = this.resetNewPassForm.value;
       resetPass.email = this.email;

             
    this._ForgotpasswordService.resetPass(resetPass).subscribe({
      next:(response)=>{
        
        if(response.token){
          
          localStorage.setItem('token', response.token);

          this._Router.navigate(['/home']);
        }
      },
      error:(err:any)=>{
        
        this.userMsg =  err.error.message;
        
      }
    })
  }
}
