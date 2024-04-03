import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {position: 1, nombre: 'Ramón Sosa', datepick: new Date(12,11,2002), correo: 'ramon@gmail.com', sexo: 'Hombre'},
    {position: 2, nombre: 'Raúl Herrera', datepick: new Date(31,7,2003), correo: 'raul@gmail.com', sexo: 'Hombre'},
    {position: 3, nombre: 'Valeria Ramirez', datepick: new Date(8,2,1992), correo: 'valeria@outlook.com', sexo: 'Mujer'},
    {position: 4, nombre: 'Horacio Acosta', datepick: new Date(17,6,1989), correo: 'horacio@hotmail.es', sexo: 'Hombre'},
    {position: 5, nombre: 'Mario Suarez', datepick: new Date(7,7,1996), correo: 'mario@hotmail.com', sexo: 'Hombre'},
    {position: 6, nombre: 'Sergio Herrera', datepick: new Date(21,10,1104), correo: 'tupapiazotador@gmail.com', sexo: 'Hombre'},
    {position: 7, nombre: 'Mauricio Romero', datepick: new Date(7,6,1989), correo: 'mauricio@gmail.com', sexo: 'Hombre'},
    {position: 8, nombre: 'Mario Garcia', datepick: new Date(1,8,1992), correo: 'mario@gmail.com', sexo: 'Hombre'},
    {position: 9, nombre: 'Valeria Medina', datepick: new Date(22,4,2002), correo: 'valeria@outlook.com', sexo: 'Mujer'},
    {position: 10, nombre: 'Natalia Fernandez', datepick: new Date(28,2,1991), correo: 'natalia@hotmail.com', sexo: 'Mujer'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuario.splice(index, 1);
  }

}
