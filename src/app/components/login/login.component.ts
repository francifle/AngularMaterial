import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) 
  {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void{

  }

  Ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'francifle' && password == '123123'){
      this.fakeLoading()
    } else if (usuario == '' && password != '123123') {{
      this.errorUser();
    }}
    else if (usuario != 'francifle' && password == '') {{
      this.errorPassword();
    }} else {
      this.error();
    }
  }

  errorUser(){
    this._snackBar.open('Falta el usuario','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  errorPassword(){
    this._snackBar.open('Falta la contraseña','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  error(){
    this._snackBar.open('Contraseña o usuario incorrecta','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
    this.router.navigate(['dashboard'])
   }, 1500); 
  }
  
}

