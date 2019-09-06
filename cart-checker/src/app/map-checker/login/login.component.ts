import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService as SocialAuthService, GoogleLoginProvider } from 'angular5-social-login';
import { HttpService } from 'src/app/http.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  //forms
  public userForm: FormGroup;
  


  constructor(
    private socialAuthService: AuthService,
    private fb: FormBuilder,
    private Http: HttpService
    ){ }
    public facebookLogin() {
      let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(userData)
            //  this.validateService.validateFacebook(userData.authToken).subscribe(res=>{
            //   console.log(res)
            //  })
         }
      );
  }
  

//   sendToRestApiMethod(token: string) : void {
    // this.http.post(“url to facebook login here”, { token: token } 
//         .subscribe(onSuccess => {
//                        //login was successful
//                        //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
//                }, onFail => {
//                        //login was unsuccessful
//                        //show an error message
//                }
//         );
// }



  ngOnInit() {
    // this.authService.authState.subscribe((response) => {
    //   this.socialUser = response;
    //   this.loggedIn = (response != null);
    //   console.log(this.socialUser);
    //   if(response){
    //     this.userForm = this.fb.group({
    //       firstName: this.fb.control(this.socialUser.firstName),
    //       lastName: this.fb.control(this.socialUser.lastName),
    //       name: this.fb.control(this.socialUser.name),
    //       id: this.fb.control(this.socialUser.id),
    //       sex: this.fb.control(''),
    //       photoUrl: this.fb.control(this.socialUser.photoUrl),
         
    //     })
    //     console.log(this.userForm)
    //   }
      
    // });
    
  }

}
