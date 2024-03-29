import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {position: 1, nombre: 'Ramón Sosa', edad: 28, correo: 'ramon@gmail.com'},
    {position: 2, nombre: 'Raúl Herrera', edad: 22, correo: 'raul@gmail.com'},
    {position: 3, nombre: 'Valeria Ramirez', edad: 35, correo: 'valeria@outlook.com'},
    {position: 4, nombre: 'Horacio Acosta', edad: 44, correo: 'horacio@hotmail.es'},
    {position: 5, nombre: 'Mario Suarez', edad: 18, correo: 'mario@hotmail.com'},
    {position: 6, nombre: 'Sergio Herrera', edad: 15, correo: 'tupapiazotador@gmail.com'},
    {position: 7, nombre: 'Mauricio Romero', edad: 54, correo: 'mauricio@gmail.com'},
    {position: 8, nombre: 'Mario Garcia', edad: 864, correo: 'mario@gmail.com'},
    {position: 9, nombre: 'Valeria Medina', edad: 12, correo: 'valeria@outlook.com'},
    {position: 10, nombre: 'Natalia Fernandez', edad: 56, correo: 'natalia@hotmail.com'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuario.splice(index, 1);
  }

}
