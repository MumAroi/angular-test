import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  formUserCreate: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.formUserCreate = this.formBuilder.group({
      // username: [null, [Validators.required, Validators.email]],
      first_name: [null, [Validators.required]],
      last_name: [null, Validators.required],
      password: [null, [Validators.required]],
      phone_number: [null, Validators.required],
      type: [null, [Validators.required]],
      is_active: [null, Validators.required]
    });
  }

  create(): void {
    if (this.formUserCreate.valid) {
      console.log(this.formUserCreate.value);
    } else {
      this.validateAllFormFields(this.formUserCreate);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      // console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
