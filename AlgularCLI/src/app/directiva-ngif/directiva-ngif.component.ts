import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngif',
  templateUrl: './directiva-ngif.component.html',
  styleUrls: ['./directiva-ngif.component.scss']
})
export class DirectivaNgifComponent implements OnInit {
cursos: string []=["Angular", "Typescript", ""];
mostrarCursos:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onMostrar(){
    this.mostrarCursos = !this.mostrarCursos
  }
}
