import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../sign-up.service';

@Component({
  selector: 'app-signup-comprador-verify',
  templateUrl: './signup-comprador-verify.component.html',
  styleUrls: []
})
export class SignupCompradorVerifyComponent implements OnInit {

  token: any;
  message: any;
  verificar = false;
  
  constructor(private signupService:SignUpService) { }

  ngOnInit(): void {
    this.VerifySignupComprador()
  }

  VerifySignupComprador() : void{
    
    //Local
    //this.token = location.href.slice(39); 
    //Dev
    this.token = location.href.slice(48); 


    var comprador: any = {
      utilityToken: this.token,
    }

    console.log(comprador)
    console.log(this.token)
    this.signupService.SignUpCompradorVerify(comprador).subscribe(
      data => {
        //window.location.href= '/admin';
        this.verificar = true;
        this.message = data.message
        console.log(data)
      },
      err => {
        console.error(err)
      } 
    )
  }

}
