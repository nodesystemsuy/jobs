import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/servicios/rest/users.rest.service';
import { format, compareAsc } from 'date-fns';
import {Helpers} from '../../../core/utils/helpers';
@Component({
  selector: 'app-person-form-register',
  templateUrl: './person-form-register.component.html',
  styleUrls: ['./person-form-register.component.css'],
})
export class PersonFormRegisterComponent implements OnInit {
  public EmployeeForm: FormGroup;
  @Input() children: any;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.buildFormBusiness();
    console.log('date: ' + format(new Date(), 'yyyy-MM-ddh:mm:ss'));
  }

  public buildFormBusiness(): void {
    this.EmployeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.maxLength(20)]],
      nickName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      birth_date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      termsConditions: ['', Validators.required],
    });
  }

  public toCharacter = (event: any) => Helpers.onlyCharacters(event);

  public HandleSubmit(event: Event): void {
    event.preventDefault();
    if (this.EmployeeForm.valid) {
      if (this.EmployeeForm.value.termsConditions) {
        console.log(this.EmployeeForm.value);
        delete this.EmployeeForm.value.termsConditions;
        this.userService.RegisterEmployee(this.EmployeeForm.value).subscribe(
          (res: any) => {
            console.log(res);
          },
          (err: any) => {
            console.log(err);
          }
        );
      } else {
        console.log('debe de aceptar los terminos y condiciones');
      }
    } else {
      console.log('error en los datos');
      console.log(this.EmployeeForm.value);
    }
  }

  public ToBusinessRegister(): void {
    this.router.navigate(['modules/home/registry/business']);
  }
}
