import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserEmailPipeComponent } from 'src/app/components/user-email.pipe/user-email.pipe.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private pipe: UserEmailPipeComponent) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [
        Validators.required,

        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }
  get userEmail() {
    return this.loginForm.get('userEmail');
  }

  get userPassword() {
    return this.loginForm.get('userPassword');
  }

  extractUserName(email: string) {
    const userName = this.pipe.transform(this.userEmail?.value);
    localStorage.setItem('userName', userName);
  }

  onSubmit() {}
}
