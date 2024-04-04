import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuarios';
import { UsuarioService } from '../../../../services/usuario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css',
})
export class CrearUsuarioComponent {
  disableSelect = new FormControl(false);

  form: FormGroup

  constructor( private fb: FormBuilder, 
    
    private _usuarioService: UsuarioService,
    private router: Router
    ){


    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      datepick: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  agregarUsuario(){

    const user: Usuario = {
      nombre: this.form.value.nombre,
      correo: this.form.value.correo,
      datepick: this.form.value.datepick,
      sexo: this.form.value.sexo
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    
  ];

}

export class DatepickerCustomIconExample {}
