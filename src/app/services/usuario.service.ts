import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {nombre: 'Ramón Sosa', datepick: new Date(2002, 10, 12), correo: 'ramon@gmail.com', sexo: 'Hombre'},
    {nombre: 'Raúl Herrera', datepick: new Date(2003, 7, 31), correo: 'raul@gmail.com', sexo: 'Hombre'},
    {nombre: 'Valeria Ramirez', datepick: new Date(1992, 2, 8), correo: 'valeria@outlook.com', sexo: 'Mujer'},
    {nombre: 'Horacio Acosta', datepick: new Date(1989, 6, 17), correo: 'horacio@hotmail.es', sexo: 'Hombre'},
    {nombre: 'Mario Suarez', datepick: new Date(1996, 7, 7), correo: 'mario@hotmail.com', sexo: 'Hombre'},
    {nombre: 'Sergio Herrera', datepick: new Date(1104, 10, 21), correo: 'tupapiazotador@gmail.com', sexo: 'Hombre'},
    {nombre: 'Mauricio Romero', datepick: new Date(1989, 6, 7), correo: 'mauricio@gmail.com', sexo: 'Hombre'},
    {nombre: 'Mario Garcia', datepick: new Date(1992, 8, 1), correo: 'mario@gmail.com', sexo: 'Hombre'},
    {nombre: 'Valeria Medina', datepick: new Date(2002, 4, 22), correo: 'valeria@outlook.com', sexo: 'Mujer'},
    {nombre: 'Natalia Fernandez', datepick: new Date(1991, 2, 28), correo: 'natalia@hotmail.com', sexo: 'Mujer'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }

  obtenerFechaSinHora(fecha: Date): string {
    return fecha.toLocaleDateString();
  }


  eliminarUsuario(index: number){
    this.listUsuario.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuario.unshift(usuario)
  }
}
