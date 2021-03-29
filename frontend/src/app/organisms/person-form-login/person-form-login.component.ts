import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/servicios/rest/users.rest.service';
import { SessionService } from '../../../core/servicios/session.service';


@Component({
  selector: 'app-person-form-login',
  templateUrl: './person-form-login.component.html',
  styleUrls: ['./person-form-login.component.css']
})
export class PersonFormLoginComponent implements OnInit {

  @Input()children: any;

  public LoginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public handlerRecovery(): void{
    this.router.navigate(["modules/home/recovery"]);
  }

  public buildForm(): void{
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public handlerSubmit(event: Event): void{
    event.preventDefault();
    if (this.LoginForm.valid){
    // const data = {
    //  email: 'test5@test.com',
    //  password: '123456',
    // };
     this.userService.PostLogin(this.LoginForm.value).subscribe(
      (res) => {
        if (!res.error){
          this.sessionService.setItem(SessionService.STRING_TOKEN, res.data);
          console.log(res);
          if (this.sessionService.exists(SessionService.STRING_TOKEN)) {
            this.router.navigate(['modules/dashboard']);
          }
        }else{
          alert('Password o Email/username invalid');
        }
      },
      (err) => {
        console.log(err);
      }
    );
   }else{
      alert('debe de completar todos los datos correctamente');
    }
  }
}
