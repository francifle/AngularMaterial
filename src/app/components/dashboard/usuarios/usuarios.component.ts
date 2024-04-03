import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../../../interfaces/usuarios';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  nombre: string;
  position: number;
  edad: number;
  correo: string;
}



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  listUsuarios: Usuario[] = []

  displayedColumns: string[] = ['position', 'nombre', 'datepick', 'correo', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void{
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort

  }

  eliminarUsuario(index: number){
      this._usuarioService.eliminarUsuario(index);
      this.cargarUsuario();

      this._snackBar.open('El usuario fue eliminado',''),{
        duration: 10,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    }
  }
}


