import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/servicios/rest/users.rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-form-register',
  templateUrl: './business-form-register.component.html',
  styleUrls: ['./business-form-register.component.css'],
})
export class BusinessFormRegisterComponent implements OnInit {
  public BusinessForm: FormGroup;
  @Input() children: any;

  constructor( private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.buildFormBusiness();
  }

  public buildFormBusiness(): void {
    this.BusinessForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      business_name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4),
        ],
      ],
      nickName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      rut: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(13),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ternsConditions: ['', Validators.required],
    });
  }

  public HandleSubmit(event: Event): void {
    event.preventDefault();
    if (this.BusinessForm.valid) {
      if (this.BusinessForm.value.ternsConditions) {
        console.log(this.BusinessForm.value);
        delete this.BusinessForm.value.ternsConditions;
        this.userService.RegisterBusiness(this.BusinessForm.value).subscribe(
          (res: any) => {
            console.log(res);
          },
          (err: any) => {
            console.log(err);
          }
        );
      } else {
        alert('debe de aceptar los terminos y condiciones');
      }
    } else {
      alert('data invalid');
    }
  }

  public ToPeopleRegister(): void {
    this.router.navigate(['modules/home/registry/people']);
  }
}
