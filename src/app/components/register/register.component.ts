import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  erroMsg:string = '';

  isloading:boolean = false;


  constructor(private _AuthService: AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  // registerForm:FormGroup = this._FormBuilder.group({

  //   name:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
  //   email:[null, [Validators.required, Validators.email]],
  //   password:[null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  //   rePassword:[null],
  //   phone:[null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]

  // },{validators:[this.confirmPassword]})
  

  show():void{

    console.log(this.registerForm.value);
    
    if(this.registerForm.valid){

      this.isloading = true;

      this._AuthService.sendRegister(this.registerForm.value).subscribe({

      
        next:(response)=>{

          if(response.message === "success"){
            
            this._Router.navigate(['/login']);

            this.isloading = false;
            
          }
          
        },
        error:(err)=>{
          this.erroMsg = err.error.message;
          
          this.isloading = false;
        }
      })
    }else{
      this.registerForm.markAllAsTouched();
    }
    
  }

  confirmPassword(group:FormGroup):void{
    
    let password = group.get('password');
    let rePassword = group.get('rePassword');

    if (rePassword?.value === null || rePassword?.value === ''){

      rePassword.setErrors({'required': true})

    }else if(rePassword?.value !== password?.value){

      rePassword?.setErrors({'mismatch':true})

    }
  }
}