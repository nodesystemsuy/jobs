import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecovery implements OnInit {

  public RecoveryForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.RecoveryForm = this.fb.group({
      email:["", [Validators.required, Validators.email]],
    });
  }

  public handlerSubmit(event: Event): void{
    event.preventDefault();
    if(this.RecoveryForm.valid){
      console.log(this.RecoveryForm.value);
    }else{
      console.log("error complete todos los datos");
    }

  }

}
